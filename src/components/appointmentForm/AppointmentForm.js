import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // "YYYY-MM-DD"
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label htmlFor="contact">Contact:</label>
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          name="contact"
        />
        <label htmlFor="date">Date:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          min={getTodayString()}
        />
        <label htmlFor="time">Time:</label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="text"
        />
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
