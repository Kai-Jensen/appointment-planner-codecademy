import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input value={name} onChange={e => setName(e.target.value)} type='text'/>
    <label htmlFor="email">Email:</label>
    <input value={email} onChange={e => setEmail(e.target.value)} type='email'/>
    <label htmlFor="phoneNumber">Phone number:</label>
    <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type='tel' pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"/>
    <button type="submit">Add Contact</button>
    </form>
    </>
  );
};

