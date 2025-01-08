import {configureStore} from "@reduxjs/toolkit";
import MenuState from "./menuState.js";

export const store = configureStore({
    reducer: {
        menu: MenuState,
    }
})