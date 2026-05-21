import jwt from 'jsonwebtoken'

const SECRET_KEY = 'sua_chave_secreta';

export function autenticarToken(req, res, next){
    const cabecalho = req.headers['authorization'];
    const token = cabecalho && cabecalho.split(' ')[1]
    if (!token) {
        return res.status(401).json({messafe:'token nao fornecido'})
    }

    jwt.verify(token, SECRET_KEY, (error, usuario)=> {
        if(error){
            return res.status(403).json({message: ' Token expirado/invalido'})
        }

        req.usuario = usuario
        next()
    })
}