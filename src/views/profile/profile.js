import * as React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { Avatar, IconButton, TextInput } from 'react-native-paper';
import { styles } from "./style_profile";
import Button from "../../components/button";

export function telaPerfil({navigation}) {
    const [selectedValue, setSelectedValue] = React.useState("Selecione uma opção");
    const [modalVisible, setModalVisible] = React.useState(false);
  
    const options = [
      { label: "Feminino", value: "F" },
      { label: "Masculino", value: "M" },
    ];
  
    const handleSelect = (item) => {
      setSelectedValue(item.label);
      setModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.avatar_container}>
                <Avatar.Image size={170} source={require('../../assets/avatar.png')}/>
                <TouchableOpacity style={styles.iconButton}>
                    <IconButton icon={"pencil"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        
        
            <View>
                <Text style={styles.text_input}>CPF</Text>
                <TextInput 

                    placeholder="Digite seu CPF" 
                    style={styles.inputs} 
                />
                <Text style={styles.text_input}>Data de Nascimento</Text>
                <TextInput 
                    placeholder="00/00/0000" 
                    style={styles.inputs} 
                    left={<TextInput.Icon icon="calendar-month-outline"/>}
                />
                <View>
                    <Text style={styles.text}>Gênero:</Text>
                    <TouchableOpacity
                        style={styles.selectButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.selectText}>{selectedValue}</Text>
                    </TouchableOpacity>

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                style={styles.option}
                                onPress={() => handleSelect(item)}
                                >
                                <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.container_button}>
                    <Button
                        title={"Cadastrar"}
                        onPress={() => {                           
                        }}
                    />
                </View>
            </View>
        
        </View>
        
    );
};