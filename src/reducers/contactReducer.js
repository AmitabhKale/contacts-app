import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
} from "../actions/action-types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John doe",
      email: "john@example.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      name: "Steve Smith",
      email: "steve@example.com",
      phone: "444-444-4444",
    },
    {
      id: 3,
      name: "Henry Williams",
      email: "henry@example.com",
      phone: "333-333-3333",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
}
