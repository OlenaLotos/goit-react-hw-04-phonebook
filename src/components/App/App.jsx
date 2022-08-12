import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Section, TitleH1 } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedSearch = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedSearch
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const searchNumber = contacts.find(contact => contact.number === number);
    if (searchNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const shownContacts = getContacts();

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList contacts={shownContacts} onDeleteContact={deleteContact} />
      </Section>
    </>
  );
}

export default App;
