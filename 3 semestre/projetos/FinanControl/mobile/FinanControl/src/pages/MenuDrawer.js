import { createDrawerNavigator } from '@react-navigation/drawer'

// import Entypo from '@expo/vector-icons/Entypo';

import Principal from './Principal';

// criando nossa constante que cria o estilo de navegação em Drawer
const Drawer = createDrawerNavigator()

export default function MenuDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Principal" component={Principal}/>
        </Drawer.Navigator>
    )
}