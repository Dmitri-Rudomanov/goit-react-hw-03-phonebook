import React, { Component } from "react";
import s from './PhonebookForm.module.css'
import PropTypes from "prop-types";


export default class PhonebookForm extends Component{
    
state={
    name: '',
    number: '',
}

    handleChange=(e)=>{
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  addContact=(e)=>{
    e.preventDefault();

    this.props.onAddContact({...this.state})

    this.setState({ name: "", number: "" });
  }

  render(){
      return(
        <form onSubmit={this.addContact} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.addContact}>
          Add contact
        </button>
      </form>
      )
  }

}

PhonebookForm.propTypes={
    name:PropTypes.string,
    number:PropTypes.string
}