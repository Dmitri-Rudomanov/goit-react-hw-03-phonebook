import React, { Component } from 'react';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Filter from 'components/Filter/Filter';
import PhonebookList from 'components/PhonebookList/PhonebookList'
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) { 
      this.setState({contacts:parsedContacts})
    }

  }
  componentDidUpdate(prevProps,prevState) { 
    const nextContact = this.state.contacts
    const prevContact = prevState.contacts;
    if (nextContact !== prevContact) {
      localStorage.setItem('contacts',JSON.stringify(nextContact))
    }
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


