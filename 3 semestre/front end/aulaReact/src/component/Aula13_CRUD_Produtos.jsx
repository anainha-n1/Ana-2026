import { useEffect, useState } from "react"
import { estilos } from "../Style/estilos"
import Aula13_card from "./Aula13_produto"



const Aula13_produto = () => {
    const [listaNome, setListaNome] = useState('')
    const [listaPreco, setListaPreco] = useState(0)
    const [linkImagem, setLinkImagem] = useState('')
    const [linkProduto, setLinkProduto] = useState('')
    const [frete, setFrete] = useState(false)
    const [categoria, setCategoria] = useState('')
    const [editando, seteditando] = useState(false)
    const [id, setid] = useState('')
    const [listaProdutos, setListasProdutos] = useState([

    ])
  
    function alterar(produto){
        setListaNome(produto.nome)
        setListaPreco(produto.preco)
        setLinkProduto(produto.link_produto)
        setLinkImagem(produto.link_imagem)
        setCategoria(produto.categoria)
        setFrete(produto.frete)
        seteditando(true)
        setid(produto.id_produto)
    }


    async function adicionar() {
        const novoProduto = {
            nome: listaNome,
            preco: listaPreco,
            link_produto: linkProduto,
            link_imagem: linkImagem,
            categoria: categoria,
            frete: frete
        }

        try {
            let endpoint = "http://localhost:3001/produtos"
            let metodo = 'POST'

            if (editando == true) {
                endpoint = `http://localhost:3001/produtos/${id}`
                metodo = 'PUT'
            }


            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            })
            if (!resposta.ok) {
                throw new Error('erro ao adicionar produto' + resposta)
            }

            buscarDados()
            LimparCamposFormularios()
           
        } catch (error) {
            console.error('erro ao adicionar produto', error.message)
        }

       
    }

    async function excluir(id) {
       
        if (!window.confirm("voce tem certeza que deseja excluir?")) return

        try {
            const resposta = await fetch(`http://localhost:3001/produtos/${id}`, {
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

    function LimparCamposFormularios(){
        setListaNome('')
        setListaPreco(0)
        setLinkImagem('')
        setLinkProduto('')
        setCategoria('')
        setFrete(false)
        seteditando(false)
        setid('')
    }

    useEffect(() => {
        buscarDados()
    }, [])
    
    async function buscarDados() {
        try {
            const resposta = await fetch(`http://localhost:3001/produtos`)
            const dados = await resposta.json()
            setListasProdutos(dados)
        } catch (error) {
            console.error('erro ao carregar os dados', error.message)
        }
    }

    return (
        <div>
            <h1>Cadastro de produtos</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" onChange={(event) => setListaNome(event.target.value)} value={listaNome} />
                <input type="number" placeholder="preco" onChange={(event) => setListaPreco(event.target.value)} value={listaPreco} />
                <input type="text" placeholder="link de imagem" onChange={(event) => setLinkImagem(event.target.value)} value={linkImagem} />
                <input type="text" placeholder="link do produto" onChange={(event) => setLinkProduto(event.target.value)} value={linkProduto} />
                <select name="" id="" onChange={(event) => setCategoria(event.target.value)} value={categoria}>
                    <option value="">selecione uma categoria</option>
                    <option value="Eletronicos">eletronicos</option>
                    <option value="brinquedos">brinquedos</option>
                    <option value="monitores">monitores</option>
                </select>
                <label >
                    <input type="checkbox" onChange={(event) => setFrete(event.target.value)} checked={frete} />
                    frete gratis
                </label>
                <button onClick={adicionar}>
                    {editando == false ? "adicionar produto" : "Editar produto"}
                </button>

                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }
               
                <hr />
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula13_card key={pos} produto={produto} excluir={excluir} alterar={alterar}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aula13_produto

