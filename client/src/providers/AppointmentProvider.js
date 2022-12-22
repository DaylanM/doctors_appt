import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AppointmentContext = React.createContext();

export const AppointmentConsumer = AppointmentContext.Consumer;

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  const getAllAppointments = (userId) => {
    axios.get(`/api/users/${userId}/appointments`)
      .then(res => setAppointments(res.data))
      .catch(err => console.log(err))
  }

  const getAllUsers = (userId) => {
    axios.get(`/api/users/${userId}/avausers`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const addAppointment = (userId, appointment) => {
    axios.post(`/api/users/${userId}/appointments`, { appointment })
    .then(res => setAppointments([...appointments, res.data]))
    .catch(err => console.log(err))
  }

  const updateAppointment = (userId, id, appointment) => {
    axios.put(`/api/users/${userId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointments.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setAppointments(newUpdatedAppointments)
        navigate(`/doctors/`)
      })
      .catch(err => console.log(err))
  }

  const deleteAppointment = (userId, id) => {
    axios.delete(`/api/users/${userId}/appointments/${id}`)
      .then(res => {
        setAppointments(appointments.filter(e => e.id !== id))
        navigate(`/users/`)
      })
      .catch(err => console.log(err))
  }

  return (
    <AppointmentContext.Provider value={{
      appointments,
      users,
      getAllAppointments,
      getAllUsers,
      addAppointment,
      updateAppointment,
      deleteAppointment,
    }}>
      { children }
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider;