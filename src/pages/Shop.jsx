import "./Shop.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import {AddShoppingCartRounded} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {ajouterArticle} from "../store/panierState.js";
import {showToast} from "../store/toastState.js";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // faire une requète http vers une api
        axios.get('https://api.escuelajs.co/api/v1/products').then(({ data }) => {
            // enregistrer les données localement
            setProducts(data.map(p => ({ ...p,
                // nettoie les mauvais caractères des urls de images
                images: p.images.map(i => i.replace(/\[|\]|/, "").replace("\"", ""))
            })))
        });
    }, []);

    const add = (p) => {
        dispatch(ajouterArticle(p));
        dispatch(showToast({ severity: 'info',  message: `l'article ${p.title} a été ajouté à votre panier` }))
    }

    return <div className={'produits'}>
        { products.map(p => <div key={p.id}>
            <Card>
                <img src={p.images[0]} alt="image" />
                <CardContent>
                    <h2>{p.title}</h2>
                    <p>{p.price}€</p>
                </CardContent>
                <CardActions>
                    <div className={'actions'}>
                        <Button onClick={() => add(p)}><AddShoppingCartRounded /></Button>
                    </div>
                </CardActions>
            </Card>
        </div>) }
    </div>
}

export default Shop