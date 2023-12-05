// eslint-disable-next-line

import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends React.Component  {

state = {
  contacts: [],
  name: ''
}




  render() {
   
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

        <ContactForm></ContactForm>

        <h2>Contacts</h2>

        <Filter></Filter>
        <ContactList></ContactList>
        

      </div>
    
    )
 }
};
