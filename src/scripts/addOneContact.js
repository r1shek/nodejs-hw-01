import { createFakeContact } from '../utils/createFakeContact.js';

import getAllContacts from './getAllContacts.js';

import updateContacts from './updateContacts.js';

const addOneContact = async () => {
  const contactList = await getAllContacts();
  const newSong = createFakeContact();
  contactList.push(newSong);
  await updateContacts(contactList);
};

addOneContact();
