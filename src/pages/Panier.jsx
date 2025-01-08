import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Input, Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {modifierQuantite, supprimerArticle} from "../store/panierState.js";

const Panier = () => {

    const articles = useSelector(state => state.panier.articles);
    const [articlesDetailles, setArticlesDetailles] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        Promise.all(articles.map(a => axios.get('https://api.escuelajs.co/api/v1/products/' + a.id).then(r => r.data)))
            .then(d => setArticlesDetailles(d.map(d => ({
                ...d,
                ...articles.find(a => a.id === d.id),
                linePrice: articles.find(a => a.id === d.id).quantity * d.price
            }))))
    }, [articles]);

    const getTotal = () => articlesDetailles.reduce((prev, current) => prev + current.quantity * current.price,0);

    const updateValue = (article, quantity) => {
        dispatch(modifierQuantite({ ...article, quantity: quantity || 0 }));
    }

    return <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Quantité</TableCell>
                    <TableCell>Prix unitaire</TableCell>
                    <TableCell>Prix</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { articlesDetailles.map(a => <TableRow key={a.id}>
                    <TableCell>{a.title}</TableCell>
                    <TableCell><Input type='number' value={a.quantity} onChange={({currentTarget}) => updateValue(a, currentTarget.valueAsNumber)} ></Input></TableCell>
                    <TableCell>{a.price}€</TableCell>
                    <TableCell>{a.linePrice}€</TableCell>
                    <TableCell><Button onClick={() => dispatch(supprimerArticle(a))}><Delete color={'danger'}/></Button></TableCell>
                </TableRow>) }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>
                        Total: { getTotal() }€
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    </>
}

export default Panier;