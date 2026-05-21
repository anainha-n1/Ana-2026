import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'

import Home from "./Home";
import Cadastro from "./Cadastro";
import Relatorio from "./Relatorio";
import Graficos from "./Graficos";

const Stack = createNativeStackNavigator()

export default function NavStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Relatorio" component={Relatorio}/>
                <Stack.Screen name="Graficos" component={Graficos}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}