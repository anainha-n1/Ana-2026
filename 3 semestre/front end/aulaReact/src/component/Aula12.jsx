import { useState } from "react"
import { estilos } from "../Style/estilos"
import Aula12_cep from "./Aula12_CEP"

const Aula12 = () => {
    const [imagem, setImagem] = useState('')
    const buscarDados = async () => {
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
        const dados = await resposta.json()
        console.log(dados.imagem);
        setImagem(dados.message)
        
    }
    return (
        <div style={estilos.cardAula}>
            <h2>aula 12 - consumo de API</h2>
            <h3>aprendendo a utilizar APIS em react</h3>
           <hr />
           <div>
           <p>dog</p>
           <img src={imagem} width={600} height={400}/>
           <button onClick={buscarDados}>ver</button>
           </div>
           <hr />
           <Aula12_cep/>
        </div>
    )
}

export default Aula12