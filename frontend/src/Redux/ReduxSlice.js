import { createSlice } from "@reduxjs/toolkit";
const ReduxSlice = createSlice({
  name: "ReduxSlice",
  initialState: {
    selectedOption: {},
    result: 0,
    percentageResult: 0,
  },
  reducers: {
    handleSelectedOption(state, action) {
      state.selectedOption[`${action.payload.questionNum}`] =
        action.payload.tempSelection;
    },

    calculatedResult(state, action) {
      state.selectedOption = {};
      state.result = action.payload;
      state.percentageResult = ((action.payload * 10) / 100) * 100 + "%";
    },
    handleClearResult(state) {
      state.selectedOption = {};
      state.result = 0;
      state.percentageResult = 0;
    },
  },
});
export const { handleSelectedOption, calculatedResult,handleClearResult } = ReduxSlice.actions;
export default ReduxSlice.reducer;
