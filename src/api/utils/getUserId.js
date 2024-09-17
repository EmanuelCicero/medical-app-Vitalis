import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserId = async () => {
    try {
        const userId = await AsyncStorage.getItem('userId'); 
        return userId;
    } catch (error) {
        console.error("Error fetching userId from AsyncStorage", error);
        return null;
    }
};
