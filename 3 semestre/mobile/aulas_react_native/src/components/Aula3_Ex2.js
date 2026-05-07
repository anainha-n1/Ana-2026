import { View, Text, FlatList, Image } from 'react-native'
import Hr from './Hr'

export const Aula3_Ex2 = () => {
    const turmas = [
        { id: 1, foto: 'https://images.tcdn.com.br/img/img_prod/1290853/chinelo_melissa_m_lover_sl_branco_275_1_848980ce4c181f49cd9a8805a125e026.jpeg', nome: 'chinelo mellisa', categoria: 'calçados', preco: 84, estoque: 90 },
        { id: 1, foto: 'https://images.tcdn.com.br/img/img_prod/1054382/bolsa_feminina_com_corrente_de_mao_bege_107_1_840523df9a11505e92015c2a283d984f.jpg', nome: 'bolsa feminina', categoria: 'calçados', preco: 290, estoque: 8},
       
    ]

    function exibirItensLista({ item }) {
        
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ flex: 1, textAlign: 'left' }}>pos: {item.id}</Text>
               
                <Text>foto:
                <Image
                    source={item.foto}
                    style={{ width: 50, height: 50 }}
                />
                </Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>nome: {item.nome}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>categoria: {item.categoria}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>preco: {item.preco}</Text>
                <Text style={{ flex: 1, textAlign: 'left' }}>estoque: {item.estoque}</Text>
            </View>
        )
    }
    return (
        <View>
            {/* criando listas utilizando componente FlatList */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}} >
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>pos</Text>
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>foto</Text>
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>nome</Text>
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>categoria</Text>
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>preco</Text>
                <Text style={{ flex: 1, textAlign: 'left',fontSize: 15, fontWeight: 'bold'}}>estoque</Text>
            </View>
            <FlatList

                data={turmas} 
                renderItem={exibirItensLista} 
                keyExtractor={item => item.id} 
            />
            {/* criando classificação do interclasse do sesi */}

        </View>
    )
}


