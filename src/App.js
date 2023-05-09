import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, updateContacts] = useState(contactList.slice(0, 10));
  // const remainingContacts = contactList.slice(10);
  const [remainingContacts, setRemaining] = useState(contactList.slice(10));

  const addRandom = () => {
    const index = Math.floor(Math.random() * remainingContacts.length);

    updateContacts([...contacts, remainingContacts.splice(index, 1)[0]]);

    console.log(contacts, remainingContacts);
  };

  const sortName = () => {
    updateContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortPopularity = () => {
    updateContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const deleteContact = (contactId) => {
    const filteredCont = [...contacts].filter(
      (contact) => contact.id !== contactId
    );
    updateContacts(filteredCont);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} width="40px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={addRandom}>Add random</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
    </div>
  );
}

export default App;
