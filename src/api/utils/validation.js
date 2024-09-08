import { useState } from 'react';

export function useFormValidation(initialValues, navigation) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'firstName':
                const { errorFirstName, validateFirstName } = verifyFirstName(value);
                if (!validateFirstName) {

                    setErrors({
                        ...errors,
                        [name]: errorFirstName,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'lastName':
                const { errorLastName, validateLastName } = verifyLastName(value);
                if (!validateLastName) {
                    setErrors({
                        ...errors,
                        [name]: errorLastName,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'email':
                const { errorEmail, validateEmail } = verifyUserEmail(value);
                if (!validateEmail) {
                    setErrors({
                        ...errors,
                        [name]: errorEmail,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'password':
                const { errorPassword, validatePassword } = verifyUserPassword(value);
                if (!validatePassword) {
                    setErrors({
                        ...errors,
                        [name]: errorPassword,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'cpf':
                const { errorCPF, validateCPF } = verifyUserCpf(value);
                if (!validateCPF) {
                    setErrors({
                        ...errors,
                        [name]: errorCPF,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'birthDate':
                const { errorBirthDate, validateBirthDate } = verifyUserBirthDate(value);
                if (!validateBirthDate) {
                    setErrors({
                        ...errors,
                        [name]: errorBirthDate,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'gender':
                const { errorGender, validateGender } = verifyUserGender(value);
                if (!validateGender) {
                    setErrors({
                        ...errors,
                        [name]: errorGender,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            default:
                break;
        }
    };
    const validateLoginFields = async (params) => {
        const { email, password } = values;

        if (email) validateField('email', email);
        if (password) validateField('password', password);
        const initialErrors = [errors.email, errors.password].some((error) => error !== '');

        if (!initialErrors) {
            try {
                const response = await fetch('http://10.0.2.2:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: params.email,
                        password: params.password,
                    }),
                });
                if (response.ok) {
                    navigation.navigate("Main");
                    alert('Login realizado com sucesso!');
                    console.log('Login realizado com sucesso!');
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocorreu um erro inesperado ao realizar o login.');
                }
            } catch (error) {
                console.error('Erro ao realizar o login:', error);
                alert('Não foi possível realizar o login. Verifique seus dados e tente novamente.');
            }
        } else {
            alert('Preencha os campos corretamente antes de continuar.');
        }
    };

    const validateInitialRegisterFields = (route, params) => {
        const { firstName, lastName, email, password } = values;
        // Valida apenas os campos iniciais
        if (firstName) validateField('firstName', firstName);
        if (lastName) validateField('lastName', lastName);
        if (email) validateField('email', email);
        if (password) validateField('password', password);

        const initialErrors = [errors.firstName, errors.lastName, errors.email, errors.password].some((error) => error !== '');

        if (!initialErrors) {
            navigation.navigate(route, params);
        } else {
            alert('Preencha os campos corretamente antes de continuar.')
        }
    };

    const validateRemainingRegisterFields = async (params) => {
        const { cpf, birthDate, gender } = values;

        if (cpf) validateField('cpf', cpf);
        if (birthDate) validateField('birthDate', birthDate);
        if (gender) validateField('gender', gender);

        const remainingErrors = [errors.cpf, errors.birthDate, errors.gender].some((error) => error !== '');

        if (!remainingErrors) {
            try {
                const response = await fetch('http://10.0.2.2:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: params.firstName,
                        lastName: params.lastName,
                        email: params.email,
                        password: params.password,
                        cpf: params.cpf,
                        birthDate: convertToJSONDate(params.birthDate),
                        gender: params.gender,
                    }),
                });
                if (response.ok) {
                    navigation.navigate("Main");
                    alert('Cadastro realizado com sucesso!');
                    console.log('Cadastro realizado com sucesso!');
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocorreu um erro inesperado ao realizar o cadastro.');
                }
            } catch (error) {
                console.error('Erro ao realizar o cadastro:', error);
                alert('Não foi possível realizar o cadastro. Verifique seus dados e tente novamente.');
            }
        } else {
            alert('Preencha os campos corretamente antes de continuar.');
        }

    };

    return {
        values,
        errors,
        handleChange,
        validateInitialRegisterFields,
        validateLoginFields,
        validateRemainingRegisterFields
    };
};

const verifyFirstName = (firstName) => {
    errorFirstName = "";
    validateFirstName = false;
    const padrao = /[^a-zà-ú]/gi;

    const valida_nome = firstName.match(padrao);
    if (valida_nome || !firstName) {
        errorFirstName = "Nome inválido!";
        return { errorFirstName, validateFirstName };
    }
    validateFirstName = true;
    return { errorFirstName, validateFirstName };
};

const verifyLastName = (lastName) => {
    errorLastName = "";
    validateLastName = false;
    const padrao = /[^a-zà-ú]/gi;

    const valida_sobrenome = lastName.match(padrao);
    if (valida_sobrenome || !lastName) {
        errorLastName = "Sobrenome inválido!";
        return { errorLastName, validateLastName };
    }
    validateLastName = true;
    return { errorLastName, validateLastName };
};

const verifyUserEmail = (userEmail) => {
    errorEmail = "";
    validateEmail = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail) {
        errorEmail = 'O campo de e-mail está vazio.';
        return { errorEmail, validateEmail };
    }

    if (!emailRegex.test(userEmail)) {
        errorEmail = 'E-mail inválido. Por favor, insira um e-mail válido.';
        return { errorEmail, validateEmail };
    }
    validateEmail = true;
    return { errorEmail, validateEmail };
};

const verifyUserPassword = (userPassword) => {
    errorPassword = "";
    validatePassword = false;
    if (!userPassword || userPassword.length < 4) {
        errorPassword = "Senha não pode ser vazia ou muito curta!";
        return { errorPassword, validatePassword };
    }
    validatePassword = true;
    return { errorPassword, validatePassword };
};

const verifyUserCpf = (strCPF) => {
    let errorCPF = "";
    let validateCPF = false;
    let Soma;
    let Resto;
    Soma = 0;

    // Verifica se o CPF é uma sequência de números iguais
    if (strCPF == "00000000000") {
        errorCPF = "CPF inválido!";
        return { errorCPF, validateCPF };
    }

    // Primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        errorCPF = "CPF inválido!";  // Correção: usar 'errorCPF'
        return { errorCPF, validateCPF };
    }

    // Segundo dígito verificador
    Soma = 0;
    for (let i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) {
        errorCPF = "CPF inválido!";
        return { errorCPF, validateCPF };
    }

    // Se chegou até aqui, o CPF é válido
    validateCPF = true;
    return { errorCPF, validateCPF };
};

const verifyUserBirthDate = (valor) => {
    errorBirthDate = "";
    validateBirthDate = false;
    // Verifica se a entrada é uma string
    if (typeof valor !== 'string') {
        errorBirthDate = "Data de nascimento inválida!";
        return { errorBirthDate, validateBirthDate };
    }

    // Verifica formato da data
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) {
        errorBirthDate = "Data de nascimento inválida!";
        return { errorBirthDate, validateBirthDate };
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
        errorBirthDate = "Data de nascimento inválida!";
        return { errorBirthDate, validateBirthDate };
    }
    // Valida número de dias do mês
    else if (dia > diasNoMes[mes]) {
        errorBirthDate = "Data de nascimento inválida!";
        return { errorBirthDate, validateBirthDate };
    }

    validateBirthDate = true;
    // Passou nas validações
    return { errorBirthDate, validateBirthDate }
};

const verifyUserGender = (gender) => {
    errorGender = "";
    validateGender = false;
    if (!gender) {
        errorGender = "Selecione uma opção acima!";
        return { errorGender, validateGender };
    }
    validateGender = true;
    return { errorGender, validateGender };
};

const convertToJSONDate = (dateString) => {
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
};
