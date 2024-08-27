import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
    container_image_title: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container_main:{
        flex: 2,
        alignItems: 'flex-start',

    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 30,
    },
    name:{
        fontSize: 25,
    },
    container_text:{
        margin: 10,
        flexDirection: 'row',  
        alignItems: 'center',    
        justifyContent: 'center', 
    },
    text: {
        fontSize: 16, 
        padding: 5,
    }
});