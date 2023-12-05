// eslint-disable-next-line

import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends React.Component  {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  formSubmithandler = (data) => {
    

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState => ({
      contacts: [...newContact,prevState.contacts]
    }))
  }

  
  render() {

    const { contacts } = this.state;
   
    return (
      
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
          color: '#010101',
        flexDirection: 'column'
      }}
    >
        <h1>Phonebook</h1>

        <ContactForm  onSubmit = {this.formSubmithandler}></ContactForm>

        <h2>Contacts</h2>

        <Filter></Filter>
        <ContactList contactsList={contacts}></ContactList>
        

      </div>
    
    )
 }
};
