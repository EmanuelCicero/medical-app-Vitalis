import * as React from "react";
import { View, Text, TouchableOpacity,SafeAreaView } from "react-native";
import { Avatar, IconButton, TextInput} from 'react-native-paper';
import { styles } from "./style_register_profile";
import { useFormValidation } from '../../api/utils/validation';
import ViewError from "../../components/viewError/viewError";
import Button from "../../components/button/button";
import { Picker } from '@react-native-picker/picker';

export function TelaPreencherPerfil({ route, navigation }) {

    const [gender, setGender] = React.useState("")
    const { firstName, lastName, email, password } = route.params;
    const initialValues = {
        cpf: '',
        birthDate: '',
        gender: '',
    };
    const { values, errors, handleChange, validateRemainingRegisterFields } = useFormValidation(initialValues, navigation);

    const options = [
        { label: "Selecione um gênero", value: ""},
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
        { label: "Outro", value: "Outro" },
    ];

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
        <SafeAreaView style={styles.container}>
            <View style={styles.containerContent}>
                <View style={styles.avatar_container}>
                    <Avatar.Image size={170} source={require('../../assets/avatar.png')} style={{backgroundColor: "#DCDCDC"}}/>
                    <TouchableOpacity style={styles.iconButton}>
                        <IconButton icon={"pencil"} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <View style={{width: 370, gap: 10}}>
                    <View style={{gap: 5}}>
                        <Text style={styles.text_input}>CPF</Text>
                        <TextInput
                            value={values.cpf}
                            onChangeText={(text) => handleChange('cpf', text)}
                            placeholder="Digite seu CPF"
                            maxLength={11}
                            style={styles.inputs}
                        />
                        <ViewError e={errors.cpf} />
                    </View>

                    <View style={{gap:5}}>
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
                    </View>

                    <View style={{ gap: 5, height: 56 }}>
                        <Text style={styles.text}>Gênero</Text>
                        <View style={styles.selectButton}>
                            <Picker
                                selectedValue={gender}
                                onValueChange={(itemValue) => {setGender(itemValue), handleChange('gender', itemValue)}}
                                style={styles.selectText}

                            >
                                {options.map((item) => (
                                    <Picker.Item key={item.value} label={item.label} value={item.value}/>
                                ))}
                            </Picker>
                        </View>
                        <ViewError e={errors.gender} />
                    </View>

                    <View style={styles.container_button}>
                        <Button
                            testId={"cadastrar"}
                            title={"Cadastrar"}
                            onPress={() => validateRemainingRegisterFields({firstName, lastName, email, password, cpf: values.cpf, birthDate: values.birthDate, gender: values.gender})}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
};