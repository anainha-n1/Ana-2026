import { estilos } from "../Style/estilos"
import Aula13_produto from "./Aula13_CRUD_Produtos"
import Aula13_CRUD_Usuario from "./Aula13_CRUD_Usuarios"



const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>aula 13</h2>
            <h3>CRUD E API</h3>
            <p>React e etc</p>
            <hr />
            <Aula13_produto/>
            <Aula13_CRUD_Usuario/>
        </div>
    )
}

export default Aula13