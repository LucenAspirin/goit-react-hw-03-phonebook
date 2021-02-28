import React from "react";
import s from "./Phonebook.module.css";

function Phonebook({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.conctact} key={id}>
          <p className={s.name}>{name}</p>
          <p className={s.number}>{number}</p>
          <button className={s.button} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Phonebook;
