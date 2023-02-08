import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from '../theme/theme';
import { Contact, contacts, visibleContact } from './ContactList/ContactList';
import Container from './Container/Container.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { PrimaryTitle, SecondaryTitle } from './Titles/Titles';

import 'react-toastify/dist/ReactToastify.css';
import { ContactList, Notification } from './ContactList/ContactList.styled';

export const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer />

        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="#ededf0"
          p={4}
          boxShadow="0px 2px 10px -3px rgba(0,0,0,0.3)"
        >
          <PrimaryTitle>Phonebook</PrimaryTitle>
          <ContactForm />
        </Container>

        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <SecondaryTitle>Contact</SecondaryTitle>
          <Filter title="Find contacts by name" />
          {contacts.length > 0 && <ContactList />}
          {contacts.length === 0 && (
            <Notification>You have no contacts</Notification>
          )}
          {visibleContact.length === 0 && (
            <Notification>contact not found</Notification>
          )}
        </Container>
      </Container>
    </ThemeProvider>
  );
};
