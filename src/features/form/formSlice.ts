import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: {
        answer: "",
        isExpanded: true,
    },
    gender: {
        answer: "",
        isExpanded: false,
    },
    birthdate: {
        answer: "",
        isExpanded: false,
    },
    insurances: {
        answer: "",
        isExpanded: false,
    },
    employment: {
        answer: "",
        isExpanded: false,
    },
    number: {
        answer: "",
        isExpanded: false,
    },
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name.answer = action.payload;
        },
        resetName: (state) => {
            state.name.answer = initialState.name.answer;
        },
        expandCollapseName: (state, action) => {
            state.name.isExpanded = action.payload;
        },
        updateGender: (state, action) => {
            state.gender.answer = action.payload;
        },
        resetGender: (state) => {
            state.gender = initialState.gender;
        },
        expandCollapseGender: (state, action) => {
            state.gender.isExpanded = action.payload;
        },
        updateBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
        resetBirthdate: (state) => {
            state.birthdate = initialState.birthdate;
        },
        expandCollapseBirthdate: (state, action) => {
            state.birthdate.isExpanded = action.payload;
        },
        updateInsurances: (state, action) => {
            state.insurances = action.payload;
        },
        resetInsurances: (state) => {
            state.insurances = initialState.insurances;
        },
        expandCollapseInsurances: (state, action) => {
            state.insurances.isExpanded = action.payload;
        },
        updateEmployment: (state, action) => {
            state.employment = action.payload;
        },
        resetEmployment: (state) => {
            state.employment = initialState.employment;
        },
        expandCollapseEmployment: (state, action) => {
            state.employment.isExpanded = action.payload;
        },
        updateNumber: (state, action) => {
            state.number = action.payload;
        },
        resetNumber: (state) => {
            state.number = initialState.number;
        },
        expandCollapseNumber: (state, action) => {
            state.number.isExpanded = action.payload;
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
    resetNumber,
    expandCollapseName,
    expandCollapseGender,
    expandCollapseBirthdate,
    expandCollapseInsurances,
    expandCollapseEmployment,
    expandCollapseNumber,
} = formSlice.actions;
export default formSlice.reducer;
