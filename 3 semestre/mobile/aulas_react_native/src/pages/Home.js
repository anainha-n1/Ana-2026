import { View, Text, Button } from 'react-native'

function Home({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent:
                "center", backgroundColor: '#ffed9f'
        }}>
        <Text style={{fontSize: 30}}>TELA PRINCIPAL </Text>
         
         <Button title='tela de cadastro' onPress={() => navigation.navigate('Cadastro')}/>

            <Button title='tela de cadastro' onPress={() => navigation.navigate('Relatorio')}/>
                
            <Button title='tela de Grafico' onPress={() => navigation.navigate('Graficos')} />


        </View>
    )
}

export default Home