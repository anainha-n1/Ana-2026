import Aula13_produto from "./Aula13_CRUD_Produtos";
const Aula13_card = ({ produto, excluir , alterar}) => {
    return (
        <div style={estilos.cardProduto}>
           <img src={produto.link_imagem} alt="" style={estilos.produtoImagem} />
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)}</p>
            <p>{produto.categoria}</p>
            {/* {produto.frete == true ? <p>frete Gratis</p>: null} */}
            {produto.frete == true && <p>frete Gratis</p>}
            <div style={{display:"flex",gap:10, justifyContent: 'center'}}>
<div>
            <a href={produto.link_produto} style={estilos.botao} target="blank">ver produto</a>
            <div style={{display: "flex", gap: 10}}>
            <button style={estilos.botao} onClick={()=> excluir(produto.id_produto)}> Excluir</button>
            <button style={estilos.botao} onClick={()=> alterar(produto)}> Alterar</button>
            </div>
            </div>

</div>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250,
        textAlign: "center"

    },


    produtoImagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold",
    },


    freteGratis: {
        fontWeight: "bold"
    }
};
export default Aula13_card
