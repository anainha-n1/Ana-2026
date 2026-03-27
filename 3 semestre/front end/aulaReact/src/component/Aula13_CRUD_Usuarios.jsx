import { useEffect, useState } from "react"
import { estilos } from "../Style/estilos"
import Aula13_usuario from "./Aula13_Usuarios"
import { enderecoServidor } from "../utils"



const Aula13_CRUD_Usuario = () => {
    const [Nome, setNome] = useState('')
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState('')
    const [id, setid] = useState('')
    const [editando, seteditando] = useState(false)
    const [usuarios, setusuarios] = useState([
        {
            Nome: "hotwheels",
            email: "sesi@sesi.br",
            senha: "abc123"
        },

    ])


    function alterar(usuarios) {
        setNome(usuarios.nome)
        setemail(usuarios.email)
        setsenha(usuarios.senha)
        seteditando(true)
        setid(usuarios.id_usuario)

    }

    async function adicionar() {
        const novousuario = {
            nome: Nome,
            email: email,
            senha: senha,

        }

        try {
            let endpoint = `${enderecoServidor}/usuarios`
            let metodo = 'POST'

            if (editando == true) {
                endpoint = `http://localhost:3001/usuarios/${id}`
                metodo = 'PUT'
            }


            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(novousuario)
            })
            if (!resposta.ok) {
                throw new Error('erro ao adicionar usuario' + resposta)
            }

            buscarDados()
            LimparCamposFormularios()

        } catch (error) {
            console.error('erro ao adicionar usuario', error.message)
        }




    }

    async function excluir(id) {

        if (!window.confirm("voce tem certeza que deseja excluir?")) return

        try {
            const resposta = await fetch(`http://localhost:3001/usuarios/${id}`, {
                method: 'DELETE'
            })

            if (!resposta.ok) {
                throw new Error('erro ao excluir produto' + resposta.statusText)
            }

            buscarDados()


        } catch (error) {
            console.error('erro ao adicionar produto', error.message)
        }


    }

    function LimparCamposFormularios() {
        setNome('')
        setemail('')
        setsenha('')
        setid('')
        seteditando(false)
    }
    useEffect(() => {
        buscarDados()
    }, [])
    //função para buscar dados de uma API
    async function buscarDados() {
        try {
            const resposta = await fetch(`http://localhost:3001/usuarios`)
            const dados = await resposta.json()
            setusuarios(dados)
        } catch (error) {
            console.error('erro ao carregar os dados', error.message)
        }
    }

    return (
        <div>
            <h1>Cadastro de Usuarios</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)} value={Nome} />
                <input type="email" placeholder="email" onChange={(event) => setemail(event.target.value)} value={email} />
                <input type="password" placeholder="senha" onChange={(event) => setsenha(event.target.value)} value={senha} />

                <button onClick={adicionar}>
                    {editando == false ? "adicionar produto" : "Editar produto"}
                </button>

                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }
                <hr />
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {
                        usuarios.map((usuario, pos) => (
                            <Aula13_usuario key={pos} usuario={usuario} excluir={excluir} alterar={alterar} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula13_CRUD_Usuario

