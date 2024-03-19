import {NavLink, Outlet } from "react-router-dom";
import navbar from '../pagestyle/navbar.css';
import logo from'../image/logo.png';
import { AccountBoxOutlined,Search, ShoppingCart} from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'



const Navbar =()=>
{
    return<div>
        <nav class="body">
            <div class="nav-logo">
                <img class="logo" src="../image/logo.png" alt=""/>
            </div>

            <div>
                <ul class="nav-link">
                    <li><NavLink to="/" class="link-action">Home </NavLink></li>
                    <li><NavLink to="/shop" class="link-action">Shop</NavLink></li>
                    <li><NavLink to="/about" class="link-action">About</NavLink></li>
                    <li><NavLink to="/contact" class="link-action">Contact</NavLink></li>
                    <li><NavLink to="/blog" class="link-action">Blog</NavLink></li>
                    <li><NavLink to="/cart" class="link-action">Cart</NavLink></li>
                   
                </ul>
            </div>

            <div class="icons-box">
                <AccountBoxOutlined class="icon"/>
                <Search class="icon"/>
                <FavoriteBorderIcon class="icon"/>
                <ShoppingCart class="icon"/>
            </div>
            <Outlet/>
        </nav>
    </div>
}
export default Navbar;