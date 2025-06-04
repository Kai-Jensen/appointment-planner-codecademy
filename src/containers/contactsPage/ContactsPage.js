import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

 function handleNameChange(newName) {
    setName(newName)
  };
 function handlePhoneNumberChange(newPhoneNumber) {
    setPhoneNumber(newPhoneNumber)
  };
 function handleEmailChange(newEmail) {
  setEmail(newEmail)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      addContact(name, phoneNumber, email);
      setName('');
      setEmail('');
      setPhoneNumber('')
    } 
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if(contacts.some(contact => contact.name === name) === true){
      setDuplicate(true)
    } else {
      setDuplicate(false)
    }
  }, [name, contacts]);
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} name={name} setName={handleNameChange} email={email} setEmail={handleEmailChange} phoneNumber={phoneNumber} setPhoneNumber={handlePhoneNumberChange} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
