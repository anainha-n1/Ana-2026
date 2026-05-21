import express, { Router } from 'express'
import { BD } from '../../db.js'
import bcrypt from 'bcrypt'
import { autenticarToken } from '../middlewares/autenticacao.js'
import jwt from 'jsonwebtoken'
const router = Router()
const SECRET_KEY = 'sua_chave_secreta'
router.get('/usuarios', autenticarToken, async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`
        const usuarios = await BD.query(query);

        return res.status(200).json(usuarios.rows);

    } catch (error) {
        console.error('Erro ao listar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao listar usuarios' })
    }
})

router.post('/usuarios', async (req, res) => {
    const { nome, email, senha, tipo } = req.body

    console.log(nome);

    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const comando = `insert into usuarios(nome, email, senha, tipo) values($1, $2, $3, $4)`
        const valores = [nome, email, senhaCriptografada, tipo]


        const responsta = await BD.query(comando, valores)
        console.log(responsta);


        return res.status(201).json('usuario cadastrado')
    } catch (error) {
        console.error('Erro ao cadastrar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao cadastrar usuarios' })
    }

})

router.put('/usuarios/:id_usuario', autenticarToken, async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo } = req.body
    try {

        const verificarUsuario = await BD.query(`SELECT * FROM usuarios where id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario nâo encontrado' })
        }
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3, tipo = $4 where id_usuario = $5`;
        const valores = [nome, email, senhaCriptografada, tipo, id_usuario];
        await BD.query(comando, valores)

        return res.status(200).json('usuario atualizado')
    } catch (error) {
        console.error('Erro ao atualizar usuarios', error.message)
        return res.status(500).json({ error: 'Erro ao atualizar usuarios' })
    }
})

router.delete('/usuarios/:id_usuario', autenticarToken, async (req, res) => {
    const { id_usuario } = req.params
    try {
        const comando = `delete from usuarios where id_usuario = $1`
        await BD.query(comando, [id_usuario])
        return res.status(200).json({ message: 'usuario removido com sucesso' })
    } catch (error) {
        console.error('erro ao deletar usuario', error.message)
        return res.status(500).json({ message: "erro interno no servidor" + error.message })
    }

})

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'campo obrigatorio vago!' });
    }

    try {
        const comando = 'SELECT id_usuario, nome, email, senha, tipo FROM usuarios WHERE email = $1';
        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({ message: 'email nao encontrado' });
        }

        const usuario = resultado.rows[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
        if (!senhaCorreta) {
            return res.status(401).json({ message: 'senha incorreta' });
        }

        const token = jwt.sign(
            { id_usuario: usuario.id_usuario, email: usuario.email },
            SECRET_KEY,
        )


        return res.status(200).json({
            message: "login realizado com sucesso",
            token: token,
            usuario: {
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }
        });

    } catch (error) {
        console.error('erro no login', error.message);
        return res.status(500).json({ message: "erro interno no servidor" });
    }
});

export default router
