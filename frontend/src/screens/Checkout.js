import React, { useState } from 'react'

import Signup from './Signup';
import './css/checkout.css'

function Checkout() {
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))

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
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="companyName">Company Name</label>
                        <input 
                            type="text" 
                            placeholder="Company Name"
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="addLin1">Address Line 1</label>
                        <input 
                            type="text" 
                            placeholder="Address Line 1"
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="addLin2">Address Line 2</label>
                        <input 
                            type="text" 
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
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="regionStateDist">Region/State/District</label>
                        <input 
                            type="text" 
                            placeholder="Region/State/District"
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="country"> Country </label>
                        <input 
                            type="text" 
                            placeholder="Country"
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="postalZip">Postal/Zip Code</label>
                        <input 
                            type="text" 
                            placeholder="Postal/Zip Code"
                        />
                    </div>
                </div>
                <button>Submit Details</button>
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
                <button>Confirm</button>
            </div>
        </div>
    )
}
export default Checkout;

const musicData = {
    name: "Claudio Monteverdi: Madrigals",
    category: "Baroque",
    composer: "Claudio Monteverdi",
    description:"Claudio Giovanni Antonio Monteverdi was an Italian composer, gambist, singer and Roman Catholic priest. Monteverdi's work, often regarded as revolutionary, marked the transition from the Renaissance style of music to that of the Baroque period.",
    price: 200,
    published: "1587-1651",
    new_arrival: false,
    music_image: "https://i.ibb.co/sg85gxq/img-5.jpg",
    music_clip: ""
}