import express from 'express';
import { BD, testarConexao } from "./db.js";
import rotaUsuarios from './src/routes/rotaUsuarios.js';
import rotaServico from './src/routes/rotaServico.js'
import rotaAgendamentos from './src/routes/rotaAgendamentos.js'


import swaggerUi from 'swagger-ui-express'
import documentacao from './config/swagger.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
app.use(cors())


app.get('/', async (req, res) => {
    await testarConexao();
    res.redirect('/swagger')
})
app.use(rotaUsuarios)
app.use(rotaAgendamentos)
app.use(rotaServico)

const porta = 3003
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);

})


