import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import {  Appbar, Card,  Modal, Portal, Provider,} from 'react-native-paper';
import Button from '../../components/button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {styles} from "./styleScheduling"


export function ScheduleAppointment ({navigation, route}){

  const { doctor } = route.params;

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');

  const formatDateBR = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };



  return (
    <SafeAreaView style={styles.container}> 
      <Provider>
          <Appbar.Header>
              <Appbar.BackAction onPress={() => navigation.navigate("Profile Doctors" , { doctor })}  />
              <Appbar.Content title="Detalhes do Médico" />
          </Appbar.Header>
      <View style={styles.containerContent}>

        <Card style={styles.styleCard}>
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#0E3C58' }
            }}
          />
        </Card>

          {selectedDate ? (
        <Card style={[styles.styleCard, {padding:10}]}>
            <View style={styles.timePickerContainer}>
              <Text style={styles.label}>Selecione um horário:</Text>
              <Picker
                selectedValue={selectedTime}
                onValueChange={(itemValue) => setSelectedTime(itemValue)}
              >
                <Picker.Item label="Selecione um horário" value="" />
                {doctor.availablehours.map((time, index) => (
                  <Picker.Item key={index} label={time} value={time} />
                ))}
              </Picker>
            </View>
        </Card>
            ) : null}

        <Card style={styles.styleCard}>
          <Text style={styles.label}>Confira seu Agendamento:</Text>
          <Text style={styles.selectionText}>
            Dia: {selectedDate ? formatDateBR(selectedDate) : 'Nenhuma data selecionada'}
          </Text>
          <Text style={styles.selectionText}>
            Horário: {selectedTime || 'Nenhum horário selecionado'}
          </Text>
        </Card>
        <Button
          title={"Confirmar"}
          style={[!selectedDate || !selectedTime ? styles.buttonDisabled : null]}
          onPress={() => {
            if (selectedDate && selectedTime) {
              showModal();
            }
          }}
          disabled={!selectedDate || !selectedTime}
        />

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
            <MaterialCommunityIcons name="check-decagram" size={100} color="#7FC2B7" />
            <Text style={styles.textModal}>Sua consulta para o dia {formatDateBR(selectedDate)} ás {selectedTime} foi marcada com sucesso!</Text>
          </Modal>
        </Portal>
      </View>
        </Provider>
    </SafeAreaView> 
  );
};

