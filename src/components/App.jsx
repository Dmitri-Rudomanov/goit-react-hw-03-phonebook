import React, { Component } from 'react';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList'
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addNewContact=(items)=>{
    const {contacts}=this.state
    const searchContact=contacts.map(contact=>contact.name).includes(items.name)

    if(searchContact){
      alert(`${items.name} is already in conacts`)
    }
    else {
      this.setState({contacts:[...this.state.contacts,{id:shortid.generate(),...items}]})
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact=(contactId)=>{
    this.setState(prevState=>({
      contacts:prevState.contacts.filter(contact=>contact.id!==contactId)
    }))
  }

  render(){
    const visibleContacts=this.getVisibleContacts()

    return(
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm onAddContact={this.addNewContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <PhonebookList visibleContacts={visibleContacts} deleteContact={this.deleteContact}/>
      </div>
    )}
  
}

export default App;


