import { View, Text, Button } from 'react-native'

function Cadasrtro({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent:
                "center", backgroundColor: '#ffd621'
        }}>
            <Text style={{ fontSize: 30 }}>TELA CADASTRO </Text>

            <Button title='tela de relatorio' onPress={() => navigation.navigate('Relatorio')} />
            <Button title='tela de Grafico' onPress={() => navigation.navigate('Graficos')} />

            <Button title='Voltar' onPress={() => navigation.goBack()} />


        </View>
    )
}

export default Cadasrtro