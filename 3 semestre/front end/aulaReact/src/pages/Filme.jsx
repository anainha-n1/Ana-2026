import { Link, useNavigate, useParams } from "react-router-dom";

function Filme() {
    const { id } = useParams();
    return (
       <div>
        <h1>filme =  {id}</h1>
        <Link to='/inicio'>inicio</Link>
       </div>
    )
}

export default Filme