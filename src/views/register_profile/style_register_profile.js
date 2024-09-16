import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    containerContent:{
        alignItems: "center",
    },
    avatar_container:{
        position: 'relative',
        
    },
    iconButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgb(211, 211, 211)',
        borderRadius: 20,
        padding: 2,
    },
    icon: {
        margin: '0', 
    },
    inputs: {
        backgroundColor: "rgb(228, 241, 238)",
        borderRadius: 5,
    },
    text_input: {
       fontSize: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
    selectButton: {
        backgroundColor: "rgb(228, 241, 238)",
        borderRadius: 5,
        height: 56,
        justifyContent: "center",
    },
    selectText: {
        fontSize: 16,
        paddingHorizontal: 16
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: 250,
    },
    option: {
        padding: 10,
    },
    optionText: {
        fontSize: 18,
    },
    container_button:{
        marginTop: 50,
    },

});