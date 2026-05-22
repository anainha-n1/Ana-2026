import { Pool } from 'pg';
// const BD = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'bd_finan_control_3b',
//     port: 5432,
//     password: 'admin'
// })
const BD = new Pool({
    connectionString: "postgres://postgres.ppepbadpiirtnmeekvgd:kXpav1N9U6hDbQ0l@aws-1-us-east-1.pooler.supabase.com:5432/postgres",
    ssl: {rejectUnauthorized: false}
})

const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log('sucesso');
        cliente.release()
        
    }
    catch (erro) {
        console.log('erro', error.message);
        
    }
 }

 export {BD, testarConexao};