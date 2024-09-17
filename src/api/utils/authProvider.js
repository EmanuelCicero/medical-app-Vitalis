import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const children = props.children;
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    setUser(true); 
                } else {
                    setUser(false);  
                }
            } catch (error) {
                console.error("Erro ao verificar o token", error);
                setUser(false); 
            }
            setLoading(false); 
        };

        checkLoginStatus();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                {children}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};
