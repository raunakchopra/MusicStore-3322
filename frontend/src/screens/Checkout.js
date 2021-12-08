import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Signup from './Signup';
import './css/checkout.css'

const handleAddress = (address) => {

    localStorage.setItem('address', JSON.stringify(address))
}
function Checkout() {
    const [loggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [cartItems] = useState(JSON.parse(localStorage.getItem("cart")))

    const [name, setName] = useState("")
    const [add1, setAdd1] = useState("")
    const [add2, setAdd2] = useState("")
    const [city, setCity] = useState("")
    const [company, setCompany] = useState("")
    const [region, setRegion] = useState("")
    const [country, setCountry] = useState("")
    const [postCode, setPostCode] = useState("")
    

    let totalQty = 0;
    let totalPrice = 0
    if(cartItems !== null){
        for(let i = 0; i<cartItems.length; ++i){
            totalPrice += (cartItems[i].data.price * cartItems[i].qty)
            totalQty += cartItems[i].qty
        }
    }
    return (
        <div className="checkout-container">
            {
                loggedInUser === null ? <Signup /> : ""
            }
            <div className="addressDetailsContainer">
                <div>
                    <div className="addressItemContainer">
                        <label for="fullName">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="companyName">Company Name</label>
                        <input 
                            type="text" 
                            placeholder="Company Name"
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="addLin1">Address Line 1</label>
                        <input 
                            type="text" 
                            placeholder="Address Line 1"
                            onChange={(e) => setAdd1(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="addLin2">Address Line 2</label>
                        <input 
                            type="text" 
                            onChange={(e) => setAdd2(e.target.value)}
                            placeholder="Address Line 2"
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="city">City</label>
                        <input 
                            type="text" 
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="regionStateDist">Region/State/District</label>
                        <input 
                            type="text"
                            onChange={(e) => setRegion(e.target.value)} 
                            placeholder="Region/State/District"
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="country"> Country </label>
                        <input 
                            type="text" 
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Country"
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="postalZip">Postal/Zip Code</label>
                        <input 
                            type="text" 
                            onChange={(e) => setPostCode(e.target.value)}
                            placeholder="Postal/Zip Code"
                        />
                    </div>
                </div>
                <button onClick={() => handleAddress({
                    name,
                    add1,
                    add2,
                    city,
                    company,
                    region,
                    country,
                    postCode
                })}>Submit Details</button>
            </div>
            <div className="orderDetailsContainer">
                <p className="order-title">Your Order</p>
                <div style={{
                    "overflow-y": "auto",
                    "height": "35%"
                }}>
                    {
                        cartItems.map((cartItem) => (
                            <div className="order-item-container">
                                <div className="order-col-name">
                                    <p>{cartItem.data.name}</p>
                                </div>
                                <div className="order-col-qty">
                                    <p>Quantity: {cartItem.qty}</p>
                                </div>
                                <div className="order-col-price">
                                    <p>Price: {cartItem.qty * cartItem.data.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="numbers">
                    <p><b>Total Item Price:</b> HKD {totalPrice}</p>
                    <p><b>Total Quantity:</b> {totalQty}</p>
                    <p><b>Shipping Charges:</b> HKD 0</p>
                    <p><b>Total Price:</b> HKD {totalPrice}</p>
                </div>
               <Link to="/invoice"><button>Confirm</button></Link>
            </div>
        </div>
    )
}
export default Checkout;