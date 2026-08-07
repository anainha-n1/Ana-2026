export default function Login(){
    const navigate = useNavigate();


    return(
        <div>
            <h2 className="text-x1 font-bold mb-4">Login</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={()=> navigate('/')}>entrar</button>
        </div>
    )
}