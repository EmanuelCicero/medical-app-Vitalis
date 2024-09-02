import * as React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { Avatar, IconButton, TextInput } from 'react-native-paper';
import { styles } from "./style_register_profile";
import Button from "../../components/button";

export function telaPreencherPerfil({ route, navigation }) {
    const { firstName, lastName, email, password } = route.params;
    const [gender, setGender] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [cpf, setCPF] = React.useState('');
    const [cpfError, setCPFError] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
    const [birthDateError, setBirthDateError] = React.useState('');
    const [genderError, setGenderError] = React.useState('');

    const verifyUserCpf = (strCPF) => {
        var Soma;
        var Resto;
        Soma = 0;

        if (strCPF == "00000000000")
        {
            setCPFError("CPF inválido!");
            return false;
        } 

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) 
        {
            setCPFError("CPF inválido!");
            return false;
        }
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11)))
        { 
            setCPFError("CPF inválido!");
            return false;
        }
        setCPFError("");
        return true;

    };

    const verifyUserBirthDate = (valor) => {
        // Verifica se a entrada é uma string
        if (typeof valor !== 'string') {
            setBirthDateError("Data de nascimento inválida!");
            return false;
        }

        // Verifica formato da data
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) {
            setBirthDateError("Data de nascimento inválida!");
            return false;
        }

        // Divide a data para o objeto "data"
        const partesData = valor.split('/')
        const data = {
            dia: partesData[0],
            mes: partesData[1],
            ano: partesData[2]
        }

        // Converte strings em número
        const dia = parseInt(data.dia)
        const mes = parseInt(data.mes)
        const ano = parseInt(data.ano)

        // Dias de cada mês, incluindo ajuste para ano bissexto
        const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        // Atualiza os dias do mês de fevereiro para ano bisexto
        if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0) {
            diasNoMes[2] = 29
        }

        // Regras de validação:
        // Mês deve estar entre 1 e 12, e o dia deve ser maior que zero
        if (mes < 1 || mes > 12 || dia < 1) {
            setBirthDateError("Data de nascimento inválida!");
            return false;
        }
        // Valida número de dias do mês
        else if (dia > diasNoMes[mes]) {
            setBirthDateError("Data de nascimento inválida!");
            return false;
        }

        setBirthDateError("");
        // Passou nas validações
        return true;
    };

    const verifyUserGender = (gender) => {
        if (!gender) {
            setGenderError("Selecione uma opção acima!");
            return false;
        }
        setGenderError("");
        return true;
    };

    const options = [
        { label: "Feminino", value: "Feminino" },
        { label: "Masculino", value: "Masculino" },
    ];

    const handleSelect = (item) => {
        setGender(item.value);
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
            setBirthDate(formattedText);
        }
    };
    function convertToJSONDate(dateString) {
        // Divide a string da data em dia, mês e ano
        const parts = dateString.split('/');
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
      
        // Cria um objeto Date com a data
        const date = new Date(year, month - 1, day);
      
        // Converte a data para uma string no formato ISO 8601
        const isoDateString = date.toISOString();
        
        return isoDateString;
      }
    
    const handleValidate = async () => {
        const isValid = verifyUserCpf(cpf);
        const isValid2 = verifyUserBirthDate(birthDate);
        const isValid3 = verifyUserGender(gender);
        
        if (isValid && isValid2 && isValid3) {
            try {
                const response = await fetch('http://10.0.2.2:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        cpf: cpf,
                        birthDate: convertToJSONDate(birthDate),
                        gender: gender,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocorreu um erro inesperado ao realizar o cadastro.');
                }
                alert('Cadastro realizado com sucesso!');
                console.log('Cadastro realizado com sucesso!');
                navigation.navigate("Main");
            } catch (error) {
                console.error('Erro ao realizar o cadastro:', error);
                alert('Não foi possível realizar o cadastro. Verifique seus dados e tente novamente.');
            }
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
                onChangeText={text => setCPF(text)} value={cpf}
                placeholder="Digite seu CPF"
                maxLength={11}
                style={styles.inputs}
            />
        </View>
        {cpfError ? <Text style={{ color: 'red' }}>{cpfError}</Text> : null}
        <View>
            <Text style={styles.text_input}>Data de Nascimento</Text>
            <TextInput
                placeholder="00/00/0000"
                keyboardType="numeric"
                value={birthDate}
                maxLength={10}
                onChangeText={handleDateChange}
                style={styles.inputs}
                left={<TextInput.Icon icon="calendar-month-outline" />}
            />
        </View>
        {birthDateError ? <Text style={{ color: 'red' }}>{birthDateError}</Text> : null}
        <View>
            <View>
                <Text style={styles.text}>Gênero:</Text>
                <TouchableOpacity
                    style={styles.selectButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.selectText}>{gender}</Text>
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
            {genderError ? <Text style={{ color: 'red' }}>{genderError}</Text> : null}
            <View>
            </View>
            <View style={styles.container_button}>
                <Button
                    title={"Cadastrar"}
                    onPress={handleValidate}
                    
                />
            </View>
        </View>

    </View>

);
};