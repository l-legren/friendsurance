import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
    name: {
        answer: string;
        isExpanded: boolean;
    };
    gender: {
        answer: string;
        isExpanded: boolean;
    };
    birthdate: {
        answer: string;
        isExpanded: boolean;
    };
    insurances: {
        answer: string[];
        isExpanded: boolean;
    };
    employment: {
        answer: string;
        isExpanded: boolean;
    };
    number: {
        answer: string;
        isExpanded: boolean;
    };
}

const initialState: StateProps = {
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
        answer: [],
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
        updateName: (state: StateProps, action) => {
            state.name.answer = action.payload;
        },
        resetName: (state: StateProps) => {
            state.name.answer = initialState.name.answer;
        },
        expandCollapseName: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
            state.name.isExpanded = action.payload;
        },
        updateGender: (state: StateProps, action: { payload: string }) => {
            state.gender.answer = action.payload;
        },
        resetGender: (state: StateProps) => {
            state.gender = initialState.gender;
        },
        expandCollapseGender: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
            state.gender.isExpanded = action.payload;
        },
        updateBirthdate: (state: StateProps, action: { payload: string }) => {
            state.birthdate.answer = action.payload;
        },
        resetBirthdate: (state: StateProps) => {
            state.birthdate = initialState.birthdate;
        },
        expandCollapseBirthdate: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
            state.birthdate.isExpanded = action.payload;
        },
        updateInsurances: (
            state: StateProps,
            action: { payload: string[] }
        ) => {
            state.insurances.answer = action.payload;
        },
        resetInsurances: (state: StateProps) => {
            state.insurances = initialState.insurances;
        },
        expandCollapseInsurances: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
            state.insurances.isExpanded = action.payload;
        },
        updateEmployment: (state: StateProps, action: { payload: string }) => {
            state.employment.answer = action.payload;
        },
        resetEmployment: (state: StateProps) => {
            state.employment = initialState.employment;
        },
        expandCollapseEmployment: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
            state.employment.isExpanded = action.payload;
        },
        updateNumber: (state: StateProps, action: { payload: string }) => {
            state.number.answer = action.payload;
        },
        resetNumber: (state: StateProps) => {
            state.number = initialState.number;
        },
        expandCollapseNumber: (
            state: StateProps,
            action: { payload: boolean }
        ) => {
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
