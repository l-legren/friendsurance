import { createSlice } from "@reduxjs/toolkit";

interface Section {
    answer: string | string[] | undefined;
    isExpanded: boolean;
}

interface StateProps {
    [key: string]: Section;
}

const initialState: StateProps = {
    name: {
        answer: "",
        isExpanded: true,
    },
    gender: {
        answer: undefined,
        isExpanded: false,
    },
    birthdate: {
        answer: "",
        isExpanded: false,
    },
    insurances: {
        answer: undefined,
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
        expandCollapseNext: (state, action) => {
            const keys = Object.keys(state);
            const targetKey = action.payload;

            const targetIndex = keys.findIndex((key) => key === targetKey);
            if (targetIndex !== -1) {
                state[keys[targetIndex]].isExpanded = false;

                for (let i = targetIndex + 1; i < keys.length; i++) {
                    const currentKey = keys[i];
                    state[currentKey].isExpanded = false;
                }

                for (let i = targetIndex + 1; i < keys.length; i++) {
                    const currentKey = keys[i];
                    if (
                        !state[currentKey].answer &&
                        !state[currentKey].isExpanded
                    ) {
                        state[currentKey].isExpanded = true;
                        break;
                    }
                }
            }
        },
        updateGender: (state: StateProps, action: { payload: string }) => {
            state.gender.answer = action.payload;
        },
        resetGender: (state: StateProps) => {
            state.gender = initialState.gender;
        },
        updateBirthdate: (state: StateProps, action: { payload: string }) => {
            state.birthdate.answer = action.payload;
        },
        resetBirthdate: (state: StateProps) => {
            state.birthdate = initialState.birthdate;
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
        updateEmployment: (state: StateProps, action: { payload: string }) => {
            state.employment.answer = action.payload;
        },
        resetEmployment: (state: StateProps) => {
            state.employment = initialState.employment;
        },
        updateNumber: (state: StateProps, action: { payload: string }) => {
            state.number.answer = action.payload;
        },
        resetNumber: (state: StateProps) => {
            state.number = initialState.number;
        },
        closeRestExpanded: (state: StateProps, action: { payload: string }) => {
            const keys = Object.keys(state) as string[];
            keys.forEach((key: string) => {
                if (key !== action.payload) {
                    state[key].isExpanded = false;
                } else {
                    state[key].isExpanded = true;
                }
            });
        },
        closeAllExpanded: (state: StateProps) => {
            const keys = Object.keys(state) as string[];
            keys.forEach((key: string) => {
                state[key].isExpanded = false;
            });
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
    closeRestExpanded,
    closeAllExpanded,
    expandCollapseNext,
} = formSlice.actions;
export default formSlice.reducer;

// expandCollapseInsurances: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.insurances.isExpanded = action.payload;
// },
// expandCollapseName: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.name.isExpanded = action.payload;
// },
//         expandCollapseNumber: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.number.isExpanded = action.payload;
// },
// expandCollapseEmployment: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.employment.isExpanded = action.payload;
// },
// expandCollapseGender: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.gender.isExpanded = action.payload;
// },
// expandCollapseBirthdate: (
//     state: StateProps,
//     action: { payload: boolean }
// ) => {
//     state.birthdate.isExpanded = action.payload;
// },
