import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import {  Appbar, Card,  Modal, Portal, Provider,} from 'react-native-paper';
import Button from '../../components/button/button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from "./styleScheduling";
import { getUserId } from '../../api/utils/getUserId';
import { useRoute } from '@react-navigation/native';


export function ScheduleAppointment({ navigation}) {
  const route = useRoute();
  const { appointmentId, doctor } = route.params;

  const { availablehours, title, source, clinic, specialty } = doctor;

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');

  const formatDateBR = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

 
  const handleAppointment = async (params) => {
    try {
      const method = appointmentId ? 'PUT' : 'POST';
      const url = appointmentId
        ? `http://10.0.2.2:5000/api/appointment/${appointmentId}`
        : 'http://10.0.2.2:5000/api/appointment';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: params.userId,
          dateAppointment: params.dateAppointment,
          timeAppointment: params.timeAppointment,
          source: params.source,
          title: params.title,
          specialty: params.specialty,
          clinic: params.clinic
        }),
      });

      if (response.ok) {
        console.log(appointmentId ? "Consulta atualizada com sucesso!" : "Consulta marcada com sucesso!");
        showModal(true);
        setTimeout(function() {
          navigation.navigate('Doctors');
        }, 1000)
        
      } else {
        throw new Error("Erro ao salvar o agendamento.");
      }
    } catch (error) {
      console.error('Erro ao salvar o agendamento:', error);
      alert('Não foi possível salvar o agendamento.');
    }
  };


  return (
    <SafeAreaView style={styles.container}> 
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.navigate("Profile Doctors" , { doctor })}  />
            <Appbar.Content title="Detalhes do Médico" />
        </Appbar.Header>
      <Provider>
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
            <Card style={[styles.styleCard, { padding: 10 }]}>
              <View style={styles.timePickerContainer}>
                <Text style={styles.label}>Selecione um horário:</Text>
                <Picker
                  selectedValue={selectedTime}
                  onValueChange={(itemValue) => setSelectedTime(itemValue)}
                >
                  <Picker.Item label="Selecione um horário" value="" />
                  {availablehours.map((time, index) => (
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
            title={appointmentId ? "Atualizar Agendamento" : "Confirmar"}
            style={[!selectedDate || !selectedTime ? styles.buttonDisabled : null]}
            onPress={async () => {
              if (selectedDate && selectedTime) {
                try {
                  const userId = await getUserId();
                  if (userId) {
                    handleAppointment({
                      userId: userId,
                      dateAppointment: selectedDate,
                      timeAppointment: selectedTime,
                      source: source,
                      title: title,
                      specialty: specialty,
                      clinic: clinic
                    });
                  } else {
                    console.error("User ID not found");
                  }
                } catch (error) {
                  console.error("Error fetching userId: ", error);
                }
              }
            }}
            disabled={!selectedDate || !selectedTime}
          />

          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
              <MaterialCommunityIcons name="check-decagram" size={100} color="#7FC2B7" />
              <Text style={styles.textModal}>
                {appointmentId ? "Seu agendamento foi atualizado com sucesso!" : "Sua consulta foi marcada com sucesso!"}
              </Text>
            </Modal>
          </Portal>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

