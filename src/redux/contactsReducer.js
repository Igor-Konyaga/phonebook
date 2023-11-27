import {
  addContact,
  deleteContact,
  fetchAllContacts,
} from 'services/phonebookApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchAllContacts();

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const contact = await addContact(newContact);
      console.log('contact: ', contact);

      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const delContact = await deleteContact(contactId);
      console.log('delContact: ', delContact);

      return delContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setIsLoadingForm(state, action) {
      state.setIsLoadingForm = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(fetchAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(fetchDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
