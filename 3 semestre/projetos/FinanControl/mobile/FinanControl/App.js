import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './src/pages/Login'
import MenuDrawer from './src/pages/MenuDrawer'


const Stack = createNativeStackNavigator()

export default function NavStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='MenuDrawer' component={MenuDrawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}