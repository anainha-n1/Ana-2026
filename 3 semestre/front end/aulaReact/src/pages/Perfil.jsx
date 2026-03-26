import { Link, useParams } from "react-router-dom";

function Perfil() {

    const {nome} = useParams();
    return (
       <div>
        <h1>perfil de {nome}</h1>
        <Link to="/">voltar</Link>
       </div>
    )
}

export default Perfil