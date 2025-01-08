import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../store/menuState.js";
import {Badge, Button} from "@mui/material";
import {MenuOpen, Close, ShoppingCart} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

const Header = () => {

    // permet de déclencher une action
    const dispatch = useDispatch();
    const open = useSelector(state => state.menu.open);

    return <header>
        <Button onClick={ () => dispatch(toggleMenu()) }>
            { !open ? <MenuOpen></MenuOpen> : <Close></Close> }
        </Button>
        <Badge badgeContent={0} color={'primary'}>
            <NavLink to="/panier">
                <ShoppingCart></ShoppingCart>
            </NavLink>
        </Badge>
    </header>
}

export default Header