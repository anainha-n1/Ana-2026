import { Router } from "express";
import { BD } from "../../db.js";
import jwt from "jsonwebtoken";
import { autenticarToken } from "../middlewares/autenticacao.js";

const router = Router();
const SECRET_KEY = 'sua_chave_secreta';

//Endpints do Dashboard

//Tansações por categoria
router.get('/dashboard', async (req, res) => {
    try {
        const resumoMes = `SELECT
SUM(CASE WHEN a.status = 'CONFIRMADO' THEN s.preco ELSE 0 END) AS faturamento,
COUNT(CASE WHEN a.status = 'CONFIRMADO' THEN 1 END) AS confirmados,
COUNT(CASE WHEN a.status = 'CANCELADO' THEN 1 END) AS cancelados
FROM agendamentos a
INNER JOIN servicos s
ON a.id_servico = s.id_servico
WHERE DATE_TRUNC('month', a.data_hora) = DATE_TRUNC('month', CURRENT_DATE)`

        const procurados = `SELECT s.nome,
COUNT(*) AS quantidade
FROM agendamentos a
INNER JOIN servicos s
ON a.id_servico = s.id_servico
GROUP BY s.nome
ORDER BY quantidade DESC`

const proximosAgendamentos = `
SELECT
    TO_CHAR(a.data_hora, 'DD/MM/YYYY HH24:MI') AS data,
    u.nome AS barbeiro,
    s.nome AS servico
FROM agendamentos a
INNER JOIN usuarios u
ON a.id_usuario = u.id_usuario
INNER JOIN servicos s
ON a.id_servico = s.id_servico
WHERE u.tipo = 'B'
AND a.data_hora >= CURRENT_TIMESTAMP
ORDER BY a.data_hora ASC
LIMIT 5
`
const fidelidade = `
        select u.nome, count(a.id_agendamento) as frequencia,
sum(s.preco) as gastos
from agendamentos a
inner join servicos s
on a.id_servico = s.id_servico
inner join usuarios u
on a.id_usuario = u.id_usuario
where status = 'CONFIRMADO'
group by u.nome
order by frequencia desc

`
        const resProximosAgendamentos = await BD.query(proximosAgendamentos)
        const resResumoMes = await BD.query(resumoMes)
        const resProcurados = await BD.query(procurados)
        const resFidelidade = await BD.query(fidelidade)

        const dadosDashboard = {
            resumoMes: resResumoMes.rows[0] || { faturamento: 0, confirmados: 0, cancelados: 0 },
            resumoProcurados: resProcurados.rows,
            proximosAgendamentos: resProximosAgendamentos.rows,
            resumoFidelidade: resFidelidade.rows
        }

        return res.status(200).json(dadosDashboard)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default router
