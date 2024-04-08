import { configureStore, createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    currentStep: 1,
    formData: {}
  },
  reducers: {
    goToNextStep: state => {
      state.currentStep += 1;
    }
  },
});


export const { goToNextStep } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
