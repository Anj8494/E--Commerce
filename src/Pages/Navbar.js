import {Link, Outlet } from "react-router-dom";
import navbar from '../pagestyle/navbar.css';
import logo from'../image/logo.png';
import { AccountBoxOutlined,Search, ShoppingCart} from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'



const Navbar =()=>
{
    return<div class="nav-body">
        <nav class="body">
            <div class="nav-logo">
                <img class="logo" src="../image/logo.png" alt=""/>
            </div>
            <div class="nav-link">
                <Link to="/" class="link">Home</Link>
                <Link to="/shop" class="link">Shop</Link>
                <Link to="/about" class="link">About</Link>
                <Link to="/contact" class="link">Contact</Link>
                <Link to="/blog" class="link">Blog</Link>
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