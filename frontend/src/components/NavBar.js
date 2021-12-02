import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './css/navbar.css'
function NavBar() {
    const [query, setQuery] = useState("")

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
                <button className="searchButton">Sign In</button>
                <button className="searchButton createAccountButton">Create Account</button>
                <button className="cartButton">Cart</button>
                <div className="cart-qty">10</div>
            </div>
        </div>
    )
}

export default NavBar
