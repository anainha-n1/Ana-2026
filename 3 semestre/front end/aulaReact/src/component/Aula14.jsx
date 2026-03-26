import { Link, useNavigate } from "react-router-dom"
import { estilos } from "../Style/estilos"


const Aula14 = () => {
    const Navigate = useNavigate()
    return (
            
        <div style={estilos.cardAula}>
            <h2>aula 14</h2>
            <h3>biblioteca</h3>
            <hr />
            <h3>navegação</h3>
            <Link to='/'>pagina principal</Link>
            <br />
            <Link to='/sobre'>sobre</Link>
            <br />
            <Link to='/sesisenai'>NotFound</Link>
            <br />
            <h3>navegação</h3>
            <button onClick={() => Navigate('/sobre')}>sobre</button>

            <hr />
            <h3>useParams</h3>
            <button onClick={() => Navigate('/perfil/Ricardo')}>perfil do Ricardo</button>
            <button onClick={() => Navigate('/perfil/Douglas')}>perfil do Douglas</button>



        </div>
    )
}

export default Aula14