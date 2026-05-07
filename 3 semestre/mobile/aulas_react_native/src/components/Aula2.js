import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native"

import { useState } from "react"
import { LinearGradient, linearGradient } from 'expo-linear-gradient'
import Hr from "./Hr"

export default function Aula02() {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Hr />
            <Text>Aula 2</Text>
            <Text>React Native</Text>
         
            <Image
                source={{ uri: 'https://picsum.photos/300/200' }}
                style={{ width: 300, height: 200 }}
            />
           
            <TextInput
                placeholder="digite aqui"
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                onChangeText={setNome}

            />
            <Button
                title="clique aqui"
                onPress={() => console.log(`bem vindo: ${nome}`)}
            />
            <Text>seu nome é: {''}{nome}</Text>

            <TouchableOpacity
                onPress={() => console.log(`bem vindo: ${nome}`)}
                style={estilos.botao}
            >
                
                <Text style={estilos.botaoTexto}>Botão</Text>

            </TouchableOpacity>

            <LinearGradient
                style={{ height: 50 }}
                colors={['transparent', 'red', 'transparent']}

            >

            </LinearGradient>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#fb00d1', padding: 12, borderRadius: 8, alignItems: 'center'
    },
    botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
