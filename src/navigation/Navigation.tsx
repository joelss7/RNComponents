import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { JoelScreen } from '../screens/JoelScreen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { SwitchScreen } from '../screens/SwitchScreen';


// mapear lo que reciben las paginas(se usa type cuando no van a ser extendidos(extends))
// Home es undefine porque no reciben ningun argumento
export type RootStackParams = {
    HomeScreen: undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
    SwitchScreen: undefined;
}


// RootStackParams es para indicar/mapear/typear que parametros recibe la navegacion
const Stack = createStackNavigator<RootStackParams>();

// Higgh Order Componete
export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />

        </Stack.Navigator>
    );
}