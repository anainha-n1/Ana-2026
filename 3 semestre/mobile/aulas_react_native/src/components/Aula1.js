
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

//Componente tradicional
export default function App() {
  return (
    //o componente View, corresponde ao div, main, section, header do html
    <View style={estilos.container}>
      {/* O componente Text corresponde ao p, h1, h2, h3, span do html */}
      <Text style={estilos.titulo}>Hello World</Text>
      <Text style={{ fontWeight: 'bold' }}>Open up App.js to start working on your app!</Text>
      {/* Defino e estilizo a barra de status do dispositivo */}
      <StatusBar style="auto" />


      {/* Aqui vou colocar o exercício */}
      <View style={{width: '100%'}}>
      <Text style={estilos.texto1}>Texto 1</Text>
      <Text style={estilos.texto2}>Texto 2</Text>
      <Text style={estilos.texto3}>Texto 3</Text>
      </View>
     
    </View>
  );
}

9
const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30
  },
  texto1: {
    color: 'blue',
    textAlign: 'left'
  },
  texto2: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  texto3: {
    color: 'red',
    textAlign:'center',
  },
});
