import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from "react-native";

import Estilos, { corPrincipal, corPlaceholder } from "./Estilos";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { firestore } from "../firebase.config";

import {
    collection,
    addDoc,
    getDocs,
    query,
    doc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

const ListaCompras = () => {

    const [item, setItem] = useState("");

    const [listaCompras, setListaCompras] = useState([]);
    const [atualizando, setAtualizado] = useState(false)

    async function buscarDados() {

        const comando = query(collection(firestore, "compras"));

        const dadosBD = await getDocs(comando);

        const novaLista = dadosBD.docs.map((documento) => ({
            id: documento.id,
            ...documento.data()
        }));

        setListaCompras(novaLista);
    }

    useEffect(() => {
        buscarDados();
    }, []);

    async function botaoExcluir(id) {

        await deleteDoc(doc(firestore, "compras", id));

        buscarDados();
    }

    async function botaoAtualizar(item) {

        const docRef = doc(firestore, "compras", item.id);

        await updateDoc(docRef, {
            comprado: !item.comprado
        });

        buscarDados();
    }

    function exibirItens({ item }) {

        return (
            <TouchableOpacity
                style={Estilos.botaoItem}
                onPress={() => botaoAtualizar(item)}
            >

                <Text
                    style={
                        item.comprado
                            ? Estilos.textoBotaoItemComprado
                            : Estilos.textoBotaoItem
                    }
                >
                    {item.produto}
                </Text>

                <FontAwesome6
                    name="delete-left"
                    size={24}
                    color="black"
                    onPress={() => botaoExcluir(item.id)}
                />

            </TouchableOpacity>
        );
    }

    async function BotaoAdicionar() {

        if (item.trim() === "") return;

        const novoItem = {
            produto: item,
            comprado: false
        };

        const docRef = await addDoc(
            collection(firestore, "compras"),
            novoItem
        );

        console.log("Documento inserido:", docRef.id);

        buscarDados();

        setItem("");
    }

    return (
        <View style={Estilos.conteudo}>

            <StatusBar
                backgroundColor={corPrincipal}
                barStyle="light-content"
            />

            <View style={Estilos.header}>
                <Image
                    style={Estilos.logo}
                    source={require("../assets/logo_lista_compras.png")}
                />
            </View>

            <View style={Estilos.corpo}>

                <View style={Estilos.inputContainer}>

                    <TextInput
                        placeholder="Adicione um novo item na lista"
                        placeholderTextColor={corPlaceholder}
                        style={Estilos.input}
                        value={item}
                        onChangeText={setItem}
                    />

                    <TouchableOpacity
                        style={Estilos.botao}
                        onPress={BotaoAdicionar}
                    >
                        <Text style={Estilos.textoBotao}>+</Text>
                    </TouchableOpacity>

                </View>

                <View style={Estilos.viewContadores}>

                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador1}>Total</Text>
                        <Text style={Estilos.numero}>
                            {listaCompras.length}
                        </Text>
                    </View>

                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador1}>Comprados</Text>
                        <Text style={Estilos.numero}>{listaCompras.filter(item => item.comprado === true).length}
                        </Text>
                    </View>
                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <refreshControl  refreshing={atualizando} onRefresh={buscarDados}/>
                    }
                />

            </View>

        </View>
    );
};

export default ListaCompras;