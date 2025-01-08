import {createSlice} from "@reduxjs/toolkit";


const PanierState = createSlice({
    name: "panierState",
    initialState: {
        articles: []
    },
    reducers: {
        ajouterArticle: (state, {payload}) => {
            const article = state.articles.find((a) => a.id === payload.id);
            if(article) {
                article.quantity++;
            } else {
                state.articles = [...state.articles, { id: payload.id, quantity: 1 }];
            }
        },
        supprimerArticle: (state, {payload}) => {
            state.articles = state.articles.filter(a => a.id !== payload.id);
        },
        modifierQuantite: (state, {payload}) => {
            const article = state.articles.find((a) => a.id === payload.id);
            article.quantity = payload.quantity;
        }
    }
})

export const { ajouterArticle, supprimerArticle, modifierQuantite } = PanierState.actions;

export default PanierState.reducer;