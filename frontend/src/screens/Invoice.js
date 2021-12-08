import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './css/Invoice.css'

function Invoice() {
    const [cartItems] = useState(JSON.parse(localStorage.getItem("cart")))
    const [address] = useState(JSON.parse(localStorage.getItem("address")))

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
                <div style={{
                    "marginTop": "10px"
                }}>
                    <table>
                        <tbody>
                            <tr className="table">
                                <th className="table">Full Name</th>
                                <td className="table">{address.name}</td>
                                <th className="table">Company</th>
                                <td className="table">{address.company ? address.company : "NA" }</td>
                            </tr>
                            <tr className="table">
                                <th className="table">Address Line 1</th>
                                <td className="table">{address.add1 ? address.add1 : "NA"}</td>
                                <th className="table">Address Line 2</th>
                                <td className="table">{address.add2 ? address.add2 : "NA"}</td>
                            </tr>
                            <tr>
                                <th className="table">City</th>
                                <td className="table">{address.city ? address.city : "NA"}</td>
                                <th className="table">Region</th>
                                <td className="table">{address.region ? address.region : "NA"}</td>
                            </tr>
                            <tr>
                                <th className="table">Country</th>
                                <td className="table">{address.country ? address.country : "NA"}</td>
                                <th className="table">Postcode</th>
                                <td className="table">{address.postCode ? address.postCode : "NA"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{
                    "marginTop": "10px"
                }} className="orderDetailsContainer">
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
                        <Link to="/"><button onClick={() => {
                            localStorage.removeItem("cart")
                            window.location.reload()
                        }}> OK </button></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Invoice
