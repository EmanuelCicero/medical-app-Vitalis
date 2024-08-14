import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaHome from './screens/tela_home.js';
import telaLogin from './screens/tela_login.js';
import telaCadastro from './screens/tela_cadastro.js';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={telaHome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={telaLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={telaCadastro} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
