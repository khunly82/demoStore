import "./Shop.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import {AddShoppingCartRounded} from "@mui/icons-material";

const Shop = () => {

    const [products, setProducts] = useState([]);

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

    return <div className={'produits'}>
        { products.map(p => <div key={p.id}>
            <Card>
                <img src={p.images[0]} alt="image" />
                <CardContent>
                    <h2>{ p.title }</h2>
                    <p>{ p.price }€</p>
                </CardContent>
                <CardActions>
                    <div className={'actions'}>
                        <Button><AddShoppingCartRounded /></Button>
                    </div>
                </CardActions>
            </Card>
        </div>) }
    </div>
}

export default Shop