import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "No name",
    gender: "No gender specified",
    dateOfBirth: "Unknown",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        resetName: (state) => {
            state.name = initialState.name;
        },
        updateGender: (state, action) => {
            state.gender = action.payload;
        },
        resetGender: (state) => {
            state.gender = initialState.gender;
        },
    },
});

export const { updateName, resetName, updateGender, resetGender } =
    formSlice.actions;
export default formSlice.reducer;
