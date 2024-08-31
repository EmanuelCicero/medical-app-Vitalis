import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { telaHome, telaCadastro, telaLogin, telaPreencherPerfil, telaMeuPerfil, Main, Doctors } from './src/views';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={telaHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={telaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={telaCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Preencha seu Perfil"
          component={telaPreencherPerfil}
        />
        <Stack.Screen 
          name="Perfil"
          component={telaMeuPerfil}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doctors"
          component={Doctors}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
