import './Menu.css';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {Home, ShoppingBag} from "@mui/icons-material"
import {closeMenu} from "../store/menuState.js";

const Menu = () => {

    // récupérer un état
    const open = useSelector(state => state.menu.open);
    const dispatch = useDispatch();

    return <nav className={classNames({ open })}>
        <ul>
            <li>
                <NavLink to='/' onClick={() => dispatch(closeMenu())}><Home/> Accueil</NavLink>
            </li>
            <li>
                <NavLink to='/shop' onClick={() => dispatch(closeMenu())}><ShoppingBag/> La boutique</NavLink>
            </li>
        </ul>
    </nav>;
}

export default Menu;