import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import './css/navbar.css'
function NavBar() {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const [query, setQuery] = useState("")
    const currCart = JSON.parse(localStorage.getItem("cart"));

    let cartQty = 0
    if(currCart !== null){
        for(let i = 0; i<currCart.length; ++i){
            cartQty += currCart[i].qty
        }
    }


    return (
        <div className="container">
            <img 
                src="https://i.ibb.co/hW2jXvG/spotify-512.png" 
                className="logo"
                alt="logo"
            />
            <div>
                <input 
                    className="inputSearchBox"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/search/${query}`}><button className="searchButton">Search</button></Link>
            </div>
            <div className="buttonContainer">
                { loggedInUser === null ? <button className="searchButton">Sign In</button> : ""}
                { loggedInUser === null ? <button className="searchButton createAccountButton">Create Account</button> : "" }
                <button className="cartButton">Cart</button>
                <div className="cart-qty">{cartQty}</div>
            </div>
        </div>
    )
}

export default NavBar
