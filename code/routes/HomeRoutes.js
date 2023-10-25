import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import Home from '../screens/Home';

const Stack = createNativeStackNavigator()

export default function HomeRoutes(){

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Perfil' component={Home}/>
            <Stack.Screen name='Recorrencias' component={Home}/>
            <Stack.Screen name='Promocoes' component={Home}/>
            <Stack.Screen name='Planos' component={Home}/>
            <Stack.Screen name='Extratos' component={Home}/>
            <Stack.Screen name='Cliente' component={Home}/>
        </Stack.Navigator>
    )

}