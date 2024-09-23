import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './src/api/utils/authProvider';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
  TelaHome, TelaCadastro, TelaLogin, TelaPreencherPerfil, 
  TelaMeuPerfil, Main, Doctors, ProfileDoctors, ScheduleAppointment 
} from './src/views';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={TelaHome} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
    <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false }} />
    <Stack.Screen name="Preencha seu Perfil" component={TelaPreencherPerfil} />
  </Stack.Navigator>
);

const PrivateRoutes = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    <Stack.Screen name="Perfil" component={TelaMeuPerfil} options={{ headerShown: false }} />
    <Stack.Screen name="Doctors" component={Doctors} options={{ headerShown: false }} />
    <Stack.Screen name="Profile Doctors" component={ProfileDoctors} options={{headerShown: false}}/>
    <Stack.Screen name="Scheduling" component={ScheduleAppointment} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
}
const Routes = () => {
  const { user } = useContext(AuthContext); 

  return user ? <PrivateRoutes /> : <PublicRoutes />;
};
