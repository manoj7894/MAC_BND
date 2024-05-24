import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
// Define the async action creator
export const fetchUserData = createAsyncThunk(
  'userDetails/fetchUserData',
  async (email, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/user?email=${email}`);
      // Return the data fetched from the API
      return response.data;
    } catch (error) {
      // Handle error
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Define the initial state
const initialState = {
  UserDetails: null,
  loading: false,
  error: null,
};

// Define the slice
const UserDetailSlice = createSlice({
  name: 'UserDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    // Handle fulfilled state
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.UserDetails = action.payload;
    });
    // Handle rejected state
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export the async action creator and the slice reducer
// export { fetchUserData };
export default UserDetailSlice.reducer;
