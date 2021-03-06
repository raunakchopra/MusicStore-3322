import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './css/navbar.css'

const handleLogOut = () => {
    localStorage.clear()
    alert("Logged Out! Thank you")
    window.location.reload()
    window.location.href = '/'
}

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
            <Link to="/">
                <img 
                    src="https://i.ibb.co/hW2jXvG/spotify-512.png" 
                    className="logo"
                    alt="logo"
                />
            </Link>
            <div>
                <input 
                    className="inputSearchBox"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/?query=${query}`}><button className="searchButton">Search</button></Link>
            </div>
            <div className="buttonContainer">
                { loggedInUser === null ? <Link to="/login"><button className="searchButton">Sign In</button></Link> : <Link to="/"><button className="searchButton" onClick={() => handleLogOut()}>Sign Out</button></Link>}
                { loggedInUser === null ? <Link to="/signup"><button className="searchButton createAccountButton">Create Account</button></Link> : "" }
                <Link to="/cart">
                    <div style={{"display": "flex"}}>
                        <button className="cartButton">Cart</button>
                        <div className="cart-qty">{cartQty}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
