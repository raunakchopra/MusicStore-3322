import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './css/Invoice.css'

function Invoice() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem("address")))

    let totalQty = 0;
    let totalPrice = 0
    if(cartItems !== null){
        for(let i = 0; i<cartItems.length; ++i){
            totalPrice += (cartItems[i].data.price * cartItems[i].qty)
            totalQty += cartItems[i].qty
        }
    }

    return (
        <div className="invoice-container">
            <p className="title-invoice"> Invoice Page </p>
            <div style={{"display": "flex"}}>
                <div className="invoice-address-container">
                    <div className="invoice-sub-container">
                        <div className="invoice-info-container">
                            <p className="invoice-label">Full Name:</p>
                            <p>{address.name}</p>
                        </div>
                        <div className="invoice-info-container">
                            <p className="invoice-label">Company:</p>
                            <p> {address.company ? address.company : "NA" }</p>
                        </div>
                    </div>
                    <div className="invoice-sub-container">
                        <div className="invoice-info-container">
                            <p className="invoice-label">Address Line 1:</p>
                            <p>{address.add1 ? address.add1 : "NA"}</p>
                        </div>
                        <div className="invoice-info-container">
                            <p className="invoice-label">Addess Line 2:</p>
                            <p>{address.add2 ? address.add2 : "NA"}</p>
                        </div>
                    </div>
                    <div className="invoice-sub-container">
                        <div className="invoice-info-container">
                            <p className="invoice-label">City:</p>
                            <p> {address.city ? address.city : ""}</p>
                        </div>
                        <div className="invoice-info-container">
                            <p className="invoice-label">Region:</p>
                            <p>{address.region ? address.region : ""}</p>
                        </div>
                    </div>
                    <div className="invoice-sub-container">
                        <div className="invoice-info-container">
                            <p className="invoice-label">Country:</p>
                            <p>{address.country ? address.country : ""}</p>
                        </div>
                        <div className="invoice-info-container">
                            <p className="invoice-label">Postcode:</p>
                            <p> {address.postCode ? address.postCode : "NA"}</p>
                        </div>
                    </div>
                </div>
                <div className="orderDetailsContainer">
                    <p className="order-title">Thank You!</p>
                    <div style={{
                        "overflow-y": "auto",
                        "height": "auto"
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
                    <div>
                        <p className="thank-you">Your order will be delivered within 7 days.</p>
                        <Link to="/"><button> OK </button></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Invoice
