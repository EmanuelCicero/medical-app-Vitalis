import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'; // useFocusEffect para detectar o foco na tela
import { getUserId } from './getUserId'; 

export function useFetchAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [userId, setUserId] = useState(null);

  const fetchAppointments = useCallback(async (currentUserId) => {
    try {
      const response = await fetch(`http://10.0.2.2:5000/api/appointment/${currentUserId}`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Erro ao buscar consultas", error);
    }
  }, []);

  useEffect(() => {
    const getUserAndSetId = async () => {
      const currentUserId = await getUserId();
      setUserId(currentUserId);
    };

    getUserAndSetId();
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (userId) {
        fetchAppointments(userId);
      }

      return () => setAppointments([]);
    }, [userId, fetchAppointments])
  );
  
  const clearAppointments = () => {
    setAppointments([]);
  };

  return { appointments, setAppointments, clearAppointments };
}
