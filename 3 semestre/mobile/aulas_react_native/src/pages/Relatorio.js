import { View, Text, Button } from 'react-native'

function Cadasrtro({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent:
                "center", backgroundColor: '#e589ff'
        }}>
        <Text style={{fontSize: 30}}>TELA RELATORIO </Text>
         
         <Button title='tela de cadastro' onPress={() => navigation.navigate('Cadastro')}/>
            <Button title='tela de Grafico' onPress={() => navigation.navigate('Graficos')} />

            <Button title='Voltar' onPress={() => navigation.goBack()}/>


        </View>
    )
}

export default Cadasrtro