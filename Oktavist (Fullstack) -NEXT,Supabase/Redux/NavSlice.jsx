const { createSlice } = require("@reduxjs/toolkit");

let initialState = 2;

const NavSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        toggleNav: (state, action) => action.payload,
    },
});

export const { toggleNav } = NavSlice.actions;

let NavReducer = NavSlice.reducer;

export default NavReducer;
