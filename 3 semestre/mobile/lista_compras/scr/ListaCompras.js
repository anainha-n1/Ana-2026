import React, { useState } from "react";
import { Text, View, TextInput, Touchable, Image, StatusBar, TouchableOpacity } from "react-native"
import Estilos, { corPrincipal, corPlaceholder } from "./Estilos";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FlatList } from "react-native";


const ListaCompras = () => {

    const [item, setItem] = useState('')

    const [listaCompras, setListaCompras] = useState([
        { id: 1, produdo: 'ovos', cpmprado: false },
        { id: 2, produto: 'pringles', comprado: true },
    ])

    function exibirItens({ item }) {
        return (
            <TouchableOpacity style={Estilos.botaoItem}>
                <Text style={Estilos.textoBotaoItem}>{item.produto}</Text>
                <FontAwesome6 name="delete-left" size={24} color="black" />
            </TouchableOpacity>
        )

    }
    function BotãoAdicionar() {
        const novoItem = {id: Date.now() , produto: item, comprado:false}
        const novaLista = [...ListaCompras, novoItem]
        setListaCompras(novaLista)
        setItem('')
    }

    return (
        <View style={Estilos.conteudo}>
            <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
            <View style={Estilos.header}>

                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')} />
            </View>

            <View style={Estilos.corpo}>

                <View style={Estilos.inputContainer}>

                    <TextInput
                        placeholder="Adicione um novo item na lista"
                        placeholderTextColor={corPlaceholder}
                        style={Estilos.input}
                        value={item} onChangeText={setItem}

                    />
                    <TouchableOpacity style={Estilos.botao}>
                        <Text style={Estilos.textoBotao}>+</Text>
                    </TouchableOpacity>

                </View>
                <FlatList

                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                />

            </View>

        </View>
    )
}
export default ListaCompras
