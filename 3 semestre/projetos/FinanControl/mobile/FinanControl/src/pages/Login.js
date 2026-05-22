import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { enderecoServidor } from "../Utils";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [msg, setMsg] = useState('')

  async function botaoEntrar() {
    try {
      if (!email || !senha) {
        setMsg('Preencha todos os campos')
        return
      }

      const resposta = await fetch(`${enderecoServidor}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      })

      if (resposta.status === 404) {
        setMsg('Rota não encontrada')
        return
      }

      let dados = null
      try {
        dados = await resposta.json()
      } catch {}

      if (resposta.status === 500) {
        setMsg(dados?.Msg || 'Erro no servidor')
        return
      }

      if (resposta.ok) {
        await AsyncStorage.setItem('UsuarioLogado', JSON.stringify(dados))
        navigation.navigate('menuDrawer')
      } else {
        setMsg('Email ou senha incorretos')
      }

    } catch (erro) {
      setMsg(`Erro ao realizar o login: ${erro.message}`)
    }
  }

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder='Digite seu email'
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha</Text>
      <TextInput
        placeholder='Digite sua senha'
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={botaoEntrar} />

      <Text>{msg}</Text>
    </View>
  )
}