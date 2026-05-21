import { View, Text, Button } from 'react-native'

function Graficos({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent:
                "center", backgroundColor: '#91f6d3'
        }}>
        <Text style={{fontSize: 30}}>TELA RELATORIO </Text>
         
         <Button title='tela de cadastro' onPress={() => navigation.navigate('Cadastro')}/>
               
         <Button title='tela de Relatorio' onPress={() => navigation.navigate('Relatorio')}/>

            <Button title='Voltar' onPress={() => navigation.goBack()}/>


        </View>
    )
}

export default Graficos