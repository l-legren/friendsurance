import { Slice, createSlice } from "@reduxjs/toolkit";

interface Section {
    answer: string | string[] | undefined;
    isExpanded: boolean;
}

interface StateProps {
    fields: {
        [key: string]: Section;
    };
    lastOpened: string;
}

const initialState: StateProps = {
    fields: {
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
    },
    lastOpened: "",
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
    },
});

export const {
    updateField,
    resetField,
    expandCollapseNext,
    closeExpandedButSelected,
    setLastOpened,
} = formSlice.actions;
export default formSlice.reducer;
