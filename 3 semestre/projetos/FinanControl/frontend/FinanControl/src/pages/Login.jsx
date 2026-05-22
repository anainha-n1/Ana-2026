import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { enderecoServidor } from "../Utils";
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [Msg, setMsg] = useState('')

  async function botaoEntrar(event) {
    event.preventDefault()
    try {
      if (email == '' || senha == '') {
        setMsg(`preencha os Campo obrigatório`)
        return
      }

      const login = {
        "email": email,
        "senha": senha
      }
      const resposta = await fetch(`${enderecoServidor}login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
      })
      if (resposta.status == 404) {
        setMsg(`Rota nao enconrada ${resposta.url}`)
        return
      }
      const dados = await resposta.json()

      if (resposta.status == 500){
        setMsg(dados.Msg)
        return
      }

      if (resposta.ok) {
        localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
        navigate('/principal')
      } else {
        setMsg('email ou senha incorretos')
        
      }

    } catch (erro) {
      setMsg(`Erro ao realizar o login ${erro.message}`)
    }
  }


  return (
    <div>
      <h1>Tela de Login</h1>
      <label>Email</label>
      <input type="email" placeholder="Digite seu email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Senha</label>
      <input type="password" placeholder="Digite sua Senha"
        value={senha} onChange={(e) => setSenha(e.target.value)} />

      <button onClick={botaoEntrar}>
        Entrar
      </button>
      <p>{Msg}</p>
    </div>
  );
}