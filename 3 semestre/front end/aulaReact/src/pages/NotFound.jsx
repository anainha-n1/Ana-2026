import { Link } from "react-router-dom";

function NotFound() {
    return (
       <div>
        <h1>pgn n encontrada</h1>
        <Link to="/">voltar</Link>
       </div>
    )
}

export default NotFound