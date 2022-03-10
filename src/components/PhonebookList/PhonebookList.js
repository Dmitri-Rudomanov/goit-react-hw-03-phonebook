import React from "react";
import s from './PhonebookList.module.css'

const PhonebookList=({visibleContacts,deleteContact})=>{
    return(
        <ul className={s.list}>
        {visibleContacts.map(contact=>
          <li className={s.contact} key={contact.id}>{contact.name}: {contact.number} <button type='button' className={s.delete} onClick={()=>deleteContact(contact.id)}>Delete</button></li>
        )}
      </ul>
    )
}

export default PhonebookList