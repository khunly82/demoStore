import {createSlice} from "@reduxjs/toolkit";

const menuState = createSlice({
    name: "menuState",
    initialState: {
        open: false,
    },
    reducers: {
        openMenu: (state) => {
            state.open = true;
        },
        closeMenu: (state) => {
            state.open = false;
        },
        toggleMenu: (state) => {
            state.open = !state.open;
        }
    }
});

export const { openMenu, closeMenu, toggleMenu } = menuState.actions

export default menuState.reducer;