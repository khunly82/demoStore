import {configureStore} from "@reduxjs/toolkit";
import MenuState from "./menuState.js";
import PanierState from "./panierState.js";
import ToastState from "./toastState.js";

export const store = configureStore({
    reducer: {
        menu: MenuState,
        panier: PanierState,
        toast: ToastState,
    },
    preloadedState: {
        // préchargement du panier
        panier: localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("panier")) : [],
    }
})

store.subscribe(() => {
    // sera executé à chaque modification du store
    const panier = store.getState().panier;
    localStorage.setItem("panier", JSON.stringify(panier));
});