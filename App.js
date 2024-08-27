import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import telaHome from "./src/views/home/home.js";
// import telaCadastro from "./src/views/register/register.js";
// import telaLogin from "./src/views/login/login.js";

import { telaHome, telaCadastro, telaLogin, telaPreencherPerfil, telaMeuPerfil } from './src/views';

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
          name='Preencha seu Perfil'
          component={telaPreencherPerfil}
        />
        <Stack.Screen 
          name='Perfil'
          component={telaMeuPerfil}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
