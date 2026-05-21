import { Router } from "express";
import { BD } from "../../db.js";
import jwt from "jsonwebtoken";
import { autenticarToken } from "../middlewares/autenticacao.js";

const router = Router();
const SECRET_KEY = 'sua_chave_secreta';


router.get('/dashboard', async (req, res) => {
    try {
        const selecaoCategorias = `
            SELECT c.nome, SUM(t.valor)as total
            FROM transacoes t
            INNER JOIN categorias c ON t.id_categoria = c.id_categoria
            WHERE t.tipo = 'SAIDA'
            GROUP BY c.nome
            ORDER BY total DESC
        `

        const selecaoMaioresGastos = `
            SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY')
            FROM transacoes
            WHERE tipo = 'SAIDA'
            ORDER BY valor DESC
            LIMIT 5
        `

        const selecaoResumoMes = `
            SELECT
                SUM(CASE WHEN tipo = 'ENTRADA' THEN valor ELSE 0 END) as entradas,
                SUM(CASE WHEN tipo = 'SAIDA' THEN valor ELSE 0 END) as saidas,
                SUM(CASE WHEN tipo = 'ENTRADA' THEN valor ELSE -valor END) as saldo
            FROM transacoes
            WHERE DATE_TRUNC('month', data_registro) = DATE_TRUNC('month', CURRENT_DATE)
        `
        const selecaoEvolucaoMensal = `
        SELECT
        TO_CHAR(data_registro, 'MM/YYYY') as mes,
        SUM(CASE WHEN tipo = 'ENTRADA' THEN valor ELSE 0 END) as entradas,
        SUM(CASE WHEN tipo = 'SAIDA' THEN valor ELSE 0 END) as saidas
        FROM transacoes
        GROUP BY TO_CHAR (data_registro, 'MM/YYYY'), DATE_TRUNC('month', data_registro)
        ORDER BY DATE_TRUNC('month', data_registro) ASC`
        
        const UtimasTransacoes =`
        
        SELECT *
        FROM transacoes
        ORDER BY id_transacoes DESC
        LIMIT 5`
        

        const resCategorias = await BD.query(selecaoCategorias)
        const resMaioresGastos = await BD.query(selecaoMaioresGastos)
        const resResumoMes = await BD.query(selecaoResumoMes)
        const resEvolucaoMes = await BD.query(selecaoEvolucaoMensal)
        const resUtimasTransacoes = await BD.query(UtimasTransacoes)

        const dadosDashboard = {
            resumoCategorias: resCategorias.rows,
            resumoMaioresGastos: resMaioresGastos.rows,
            resumoMes: resResumoMes.rows[0] || { entradas: 0, saidas: 0, saldo: 0 },
            resumoEvolucaoMes: resEvolucaoMes.rows,
            resumoUtimasTransacoes: resUtimasTransacoes.rows
        }

        return res.status(200).json(dadosDashboard)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


router.get('/dashboard/maiores-gastos', async (req, res) => {
    try {
        const comando = `
            SELECT descricao, valor, TO_CHAR(data_registro, 'DD/MM/YYYY')
            FROM transacoes
            WHERE tipo = 'SAIDA'
            ORDER BY valor DESC
            LIMIT 5
        `
        const resultado = await BD.query(comando)
        return res.status(200).json(resultado)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default router
