import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native'

import Octicons from '@expo/vector-icons/Octicons';

import Home from "./Home";
import Cadastro from "./Cadastro";
import Relatorio from "./Relatorio";
import Graficos from "./Graficos";

const Drawer = createDrawerNavigator()

export default function NavDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#d3ffff'
                    }
                }}

            >

                <Drawer.Screen name="Home" component={Home}

                    options={{
                        title: 'home',
                        drawerIcon: ({ size, color }) => <Octicons name="home" size={size} color={color} />
                    }}

                />
                <Drawer.Screen name="Cadastro" component={Cadastro} 
                
                options={{
                    title:'cadastro',
                    drawerIcon: ({ size, color }) => <Octicons name="feed-issue-closed" size={size} color={color}/>
                }}
                
                />
                <Drawer.Screen name="Relatorio" component={Relatorio} 
                options={{
                    title:'relatorio',
                    drawerIcon: ({ size, color }) => <Octicons name="checklist" size={size} color={color}/>
                }}
                />
                <Drawer.Screen name="Graficos" component={Graficos}
                    options={{
                        title: 'gráfico',
                        drawerIcon: ({ size, color }) => <Octicons name="graph" size={size} color={color} />
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}