import { Slice, createSlice } from "@reduxjs/toolkit";

interface Section {
    title: string
    answer: string | string[] | undefined;
    isExpanded: boolean;
}

interface StateProps {
    fields: {
        [key: string]: Section;
    };
    lastOpened: string;
    allAnswered: boolean;
}

const initialState: StateProps = {
    fields: {
        name: {
            title: "Name",
            answer: undefined,
            isExpanded: true,
        },
        gender: {
            title: "Gender",
            answer: undefined,
            isExpanded: false,
        },
        birthdate: {
            title: "Birthdate",
            answer: undefined,
            isExpanded: false,
        },
        insurances: {
            title: "Insurances",
            answer: undefined,
            isExpanded: false,
        },
        employment: {
            title: 'Employment Status',
            answer: undefined,
            isExpanded: false,
        },
        number: {
            title: 'Phone Number',
            answer: undefined,
            isExpanded: false,
        },
    },
    lastOpened: "",
    allAnswered: false,
};

const formSlice: Slice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateField: (
            state: StateProps,
            action: { payload: { field: string; input: string | string[] } }
        ) => {
            const { field, input } = action.payload;
            state.fields[field].answer = input;
        },
        expandCollapseNext: (
            state: StateProps,
            action: { payload: string }
        ) => {
            const { fields } = state;
            const keys = Object.keys(fields);
            const targetKey = action.payload;

            const targetIndex = keys.findIndex((key) => key === targetKey);
            if (targetIndex <= keys.length) {
                fields[keys[targetIndex]].isExpanded = false;

                for (let i = targetIndex + 1; i < keys.length; i++) {
                    const currentKey = keys[i];
                    fields[currentKey].isExpanded = false;
                }

                for (let i = 0; i < keys.length; i++) {
                    const currentKey = keys[i];
                    if (
                        !fields[currentKey].answer &&
                        !fields[currentKey].isExpanded
                    ) {
                        fields[currentKey].isExpanded = true;
                        break;
                    }
                }
            }
        },
        resetField: (state: StateProps, action: { payload: string }) => {
            state.fields[action.payload].answer =
                initialState.fields[action.payload].answer;
        },
        closeExpandedButSelected: (
            state: StateProps,
            action: { payload: string }
        ) => {
            const { fields } = state;
            const keys = Object.keys(fields) as string[];
            keys.forEach((key: string) => {
                if (key !== action.payload) {
                    fields[key].isExpanded = false;
                } else {
                    fields[key].isExpanded = true;
                }
            });
        },
        setLastOpened: (state: StateProps) => {
            const { fields } = state;
            for (const key in fields) {
                if (fields[key].isExpanded === true) {
                    state.lastOpened = key;
                }
            }
        },
        allFieldsAnswered: (state: StateProps) => {
            const { fields } = state;
            let count = 0;
            for (const key in fields) {
                if (fields[key].answer) {
                    count++;
                }
            }
            if (count >= 6) {
                state.allAnswered = true;
            } else {
                state.allAnswered = false;
            }
        },
        resetAll: (state: StateProps) => {
            return initialState;
        },
    },
});

export const {
    updateField,
    resetField,
    expandCollapseNext,
    closeExpandedButSelected,
    setLastOpened,
    allFieldsAnswered,
    resetAll
} = formSlice.actions;
export default formSlice.reducer;
