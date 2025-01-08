import './App.css'
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import {useRoutes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Panier from "./pages/Panier.jsx";
import Shop from "./pages/Shop.jsx";
import {Alert, Snackbar} from "@mui/material";
import {useState} from "react";
import Toast from "./components/Toast.jsx";

function App() {

    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/panier', element: <Panier /> },
    ]);

  return (
    <>
        <Header />
        <Menu />
        <main>{ routes }</main>
        <Toast />
    </>
  )
}

export default App
