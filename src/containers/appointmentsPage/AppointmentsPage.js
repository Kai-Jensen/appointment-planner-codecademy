import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleNameChange(newName) {
    setName(newName);
  }
  function handleContactChange(newContact) {
    setContact(newContact);
  }
  function handleDateChange(newDate) {
    setDate(newDate);
  }
  function handleTimeChange(newTime) {
    setTime(newTime);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          contacts={contacts}
          name={name}
          setName={handleNameChange}
          contact={contact}
          setContact={handleContactChange}
          date={date}
          setDate={handleDateChange}
          time={time}
          setTime={handleTimeChange}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};
