import { View, Text, FlatList } from 'react-native'
import Hr from './Hr'

export const Aula3_Ex1 = () => {
    const turmas = [
        { id: 1, aluno: '3° B', materia:'geografia', media: 7.5, faltas: 8 },
        { id: 2, aluno: '3° A', materia:'matematica', media: 5, faltas: 2 },
        { id: 3, aluno: '3° A', materia:'biologia', media: 7, faltas: 5 },
        { id: 4, aluno: '3° B', materia:'historia', media: 8, faltas: 7}
    ]

    function exibirItensLista({ item }) {
       
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{flex: 1, textAlign: 'left'}}>pos: {item.id}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>aluno: {item.aluno}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>materia: {item.materia}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>media: {item.media}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>faltas: {item.faltas}</Text>

            </View>
        )
    }
    return (
        <View>
           
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >Ex 1</Text>
            <FlatList

                data={turmas} 
                renderItem={exibirItensLista} 
                keyExtractor={item => item.id} 


            />
            
        </View>
    )
}