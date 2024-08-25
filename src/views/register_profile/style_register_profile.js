import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: 46,
        width: 350,
        backgroundColor: "rgb(228, 241, 238)",
        borderRadius: 5,
        marginVertical: 10,
    },
    text_input: {
        margin: 5,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    
    text: {
        fontSize: 14,
        marginBottom: 10,
    },
    selectButton: {
        backgroundColor: "rgb(228, 241, 238)",
        padding: 10,
        borderRadius: 5,
        height: 46,
        width: 350,
        alignItems: 'center',
    },
    selectText: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        marginTop: 30,
    },

});