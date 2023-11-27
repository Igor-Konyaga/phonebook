import {
  requestLogin,
  requestLogout,
  requestRefreshUser,
  requestRegister,
  setToken,
} from 'services/phonebookApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const userData = await requestRegister(formData);

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const userData = await requestLogin(formData);

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestRefreshUser();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token !== null) {
        return true;
      } else {
        return false;
      }
    },
  }
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const data = await requestLogout();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: { email: null, name: null },
  isLoading: false,
  error: null,
  authentication: false,
};

const authSlice = createSlice({
  name: 'auth',
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
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentication = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentication = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentication = true;
        state.user = action.payload;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
