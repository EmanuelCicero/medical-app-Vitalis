export function useDeleteAppointment() {
    const deleteAppointment = async (appointmentId, updateAppointments) => {
        try {
            const response = await fetch(`http://10.0.2.2:5000/api/appointment/${appointmentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Erro ao deletar a consulta com ID ${appointmentId}`);
            }

            console.log(`Consulta com ID ${appointmentId} deletada com sucesso.`);

            updateAppointments((prevAppointments) =>
                prevAppointments.filter(appointment => appointment._id !== appointmentId)
            );
        } catch (error) {
            console.error('Erro ao deletar a consulta:', error);
        }
    };

    return { deleteAppointment };
}
