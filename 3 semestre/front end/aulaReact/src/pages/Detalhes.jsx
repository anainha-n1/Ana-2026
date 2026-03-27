import { Link, useNavigate } from "react-router-dom";

function Detalhes() {
    const Navigate = useNavigate()
    return (
        <div>
            <h1>mais informações</h1>
             <button onClick={() => Navigate('/contato')}>contato</button>
        </div>
    )
}

export default Detalhes