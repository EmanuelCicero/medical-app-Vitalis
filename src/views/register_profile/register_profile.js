import * as React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { Avatar, IconButton, TextInput } from 'react-native-paper';
import { styles } from "./style_register_profile";
import { useFormValidation } from '../../api/utils/validation';
import ViewError from "../../components/viewError";
import Button from "../../components/button";

export function telaPreencherPerfil({ route, navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { firstName, lastName, email, password } = route.params;
    const initialValues = {
        cpf: '',
        birthDate: '',
        gender: '',
    };
    const { values, errors, handleChange, validateRemainingRegisterFields } = useFormValidation(initialValues, navigation);

    const options = [
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
    ];

    const handleSelect = (item) => {
        handleChange('gender', item.value);
        setModalVisible(false);
    };
    const handleDateChange = (text) => {
        let formattedText = text.replace(/[^0-9]/g, '');

        if (formattedText.length > 2 && formattedText.length <= 4) {
            formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2);
        } else if (formattedText.length > 4) {
            formattedText =
                formattedText.slice(0, 2) + '/' +
                formattedText.slice(2, 4) + '/' +
                formattedText.slice(4, 8);
        }

        if (formattedText.length <= 10) {
            handleChange('birthDate', formattedText);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.avatar_container}>
                <Avatar.Image size={170} source={require('../../assets/avatar.png')} />
                <TouchableOpacity style={styles.iconButton}>
                    <IconButton icon={"pencil"} style={styles.icon} />
                </TouchableOpacity>
            </View>


            <View>
                <Text style={styles.text_input}>CPF</Text>
                <TextInput
                    value={values.cpf}
                    onChangeText={(text) => handleChange('cpf', text)}
                    placeholder="Digite seu CPF"
                    maxLength={11}
                    style={styles.inputs}
                />
                <ViewError e={errors.cpf} />
                <Text style={styles.text_input}>Data de Nascimento</Text>
                <TextInput
                    placeholder="00/00/0000"
                    keyboardType="numeric"
                    value={values.birthDate}
                    maxLength={10}
                    onChangeText={(text) => handleDateChange(text)}
                    style={styles.inputs}
                    left={<TextInput.Icon icon="calendar-month-outline" />}
                />
                <ViewError e={errors.birthDate} />
                <View>
                    <Text style={styles.text}>Gênero:</Text>
                    <TouchableOpacity
                        style={styles.selectButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.selectText}>{values.gender}</Text>
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
                    <ViewError e={errors.gender} />
                </View>
                <View style={styles.container_button}>
                    <Button
                        title={"Cadastrar"}
                        onPress={() => validateRemainingRegisterFields('Main', {firstName, lastName, email, password, cpf: values.cpf, birthDate: values.birthDate, gender: values.gender})}
                    />
                </View>
            </View>
        </View>

    );
};