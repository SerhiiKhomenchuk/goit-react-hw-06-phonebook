import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getfilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getfilter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = id => {
    const index = contacts.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      dispatch(deleteContact(index));
    }
  };

  return (
    visibleContact.length > 0 && (
      <ul className="list-group">
        {visibleContact.map(({ name, number, id }) => {
          return (
            <li
              key={id}
              id={id}
              className="list-group-item  d-flex justify-content-between fs-3 list-group-item-action list-group-item-warning"
            >
              <span>{name}:</span>
              <span>{number}</span>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default ContactList;
