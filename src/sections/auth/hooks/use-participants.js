import axios, { AxiosError } from 'axios';
import { useState, useEffect, useRef } from 'react';

const useParticipants = (city) => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalIdRef = useRef(null); // useRef para almacenar el ID del intervalo

  const fetchParticipants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_PARTICIPANTS_BASE_URL}${city}`); // Especificamos el tipo de dato que esperamos en la respuesta
      const newParticipants = response.data;
      if (JSON.stringify(newParticipants) !== JSON.stringify(participants)) {
        setParticipants(newParticipants);
        console.log('Participantes actualizados:', newParticipants);
      } else {
        console.log('No hay nuevos participantes. Manteniendo la lista actual.');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error de Axios al obtener participantes:', err);
        setError(err); // El error es de tipo AxiosError
      } else {
        console.error('Error desconocido al obtener participantes:', err);
        setError(new AxiosError('An unknown error occurred', 'UNKNOWN_ERROR')); // O un tipo de error genérico
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();

    intervalIdRef.current = window.setInterval(fetchParticipants, 300000); // 5 minutos en milisegundos

    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
    };
  }, [city, participants]); // Dependencia 'participants' para la optimización de JSON.stringify

  return { participants, loading, error };
};

export default useParticipants;