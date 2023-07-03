import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "No name",
        gender: "No gender specified",
        dateOfBirth: "Unknown",
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const { updateName } = formSlice.actions;
export default formSlice.reducer;
