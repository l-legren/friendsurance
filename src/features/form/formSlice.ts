import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "No name",
    gender: "No gender specified",
    birthdate: "Date unknown",
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
        updateBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
        resetBirthdate: (state) => {
            state.birthdate = initialState.birthdate;
        },
    },
});

export const { updateName, resetName, updateGender, resetGender, updateBirthdate, resetBirthdate } =
    formSlice.actions;
export default formSlice.reducer;
