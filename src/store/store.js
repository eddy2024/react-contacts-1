import { createStore } from 'redux'

import contactsReducer from '../reducers/contactReducer'

export const store = createStore(contactsReducer)