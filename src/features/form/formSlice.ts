import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "No name",
    gender: "No gender specified",
    birthdate: "Date unknown",
    insurances: "No insurances added",
    employment: "No data",
    number: "no number"
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
        updateInsurances: (state, action) => {
            state.insurances = action.payload;
        },
        resetInsurances: (state) => {
            state.insurances = initialState.insurances;
        },
        updateEmployment: (state, action) => {
            state.employment = action.payload;
        },
        resetEmployment: (state) => {
            state.employment = initialState.employment;
        },
        updateNumber: (state, action) => {
            state.number = action.payload;
        },
        resetNumber: (state) => {
            state.number = initialState.number;
        },
    },
});

export const {
    updateName,
    resetName,
    updateGender,
    resetGender,
    updateBirthdate,
    resetBirthdate,
    updateInsurances,
    resetInsurances,
    updateEmployment,
    resetEmployment,
    updateNumber,
    resetNumber
} = formSlice.actions;
export default formSlice.reducer;
