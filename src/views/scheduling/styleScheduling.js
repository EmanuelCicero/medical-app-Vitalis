import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containerContent:{
      justifyContent: "space-around",
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    timePickerContainer: {
      marginTop: 20,
    },
    label: {
      fontSize: 20,
      marginBottom: 8,
    },
    selectionText: {
      marginTop: 16,
      fontSize: 18,
    },
    buttonDisabled: {
      backgroundColor: '#A6A6A6',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    styleCard:{
      marginHorizontal:20,
      backgroundColor: "#fff",
      padding: 10
    },
    modal:{
      backgroundColor: "#fff",
      alignItems:"center",
      margin: 20,
      borderRadius: 20,
      height: 400
    },
    textModal:{
      fontSize: 18,
      marginTop: 10, 
      width: 300,
      textAlign: "center"
    }
  });
  
