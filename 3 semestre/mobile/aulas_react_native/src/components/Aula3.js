import { View, Text, FlatList } from "react-native";
import Hr from './Hr'
import { Aula03_Exercicio1 } from "./Aula3_Ex1";
import { Aula03_Exercicio2 } from "./Aula3_Ex2";

const Aula03 = () => {
    const turmas = [
        { id: 1, turma: '3 B', pontos: 10 },
        { id: 2, turma: '3 A' , pontos: 6},
        { id: 3, turma: '2 A', pontos: 8 },
        { id: 4, turma: '2 B', pontos: 3 },
    ]

    function exibirItensLista( {item}) {
        return(
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>{item.id}</Text>
                <Text>{item.turma}</Text>
            </View>
        )
    }
    function exibirItensInter( {item}) {
        return(
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>pos: {item.id}</Text>
                <Text>turma: {item.turma}</Text>
                <Text>pontos: {item.pontos}</Text>
            </View>
        )
    }

    return (
        <View>
            <Hr />
            <Text>Aula 03</Text>
            <Text>listar</Text>
            <Hr />
            {
                turmas.map((item) => (
                    <Text key={item.id}> Turma: {item.turma}</Text>
                ))
            }
            <Hr />
           
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}} > lista </Text>
            <FlatList

                data={turmas} 
                renderItem={exibirItensLista} 
                keyExtractor={item => item.id} 

            />
            <Hr />
            
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}} > interface sesi </Text>
            <FlatList

                data={turmas} 
                renderItem={exibirItensInter} 
                keyExtractor={item => item.id}

            />
            <Hr/>
            <Aula3_Ex1/>
            <Hr/>
            <Aula3_Ex2/>

        </View>
    )
}

export default Aula03