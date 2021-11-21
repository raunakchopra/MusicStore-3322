import React from 'react'
import './css/Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,  } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    return (
        <div className="cart-mainContainer">
            <div className="cart-container">
                <p className="cart-title">Cart</p>
                <hr className="hr" />
                <div className="item-details-container">
                    <img className="item-img" src={musicData.music_image} alt="music-item" />
                    <div className="item-details-text">
                        <div>
                            <p>{musicData.name}</p>
                            <p>{musicData.composer}</p>
                            <p>HKD {musicData.price}</p>
                        </div>
                        <div className="qty-icon-container">
                            <p>Quantity: 10</p>
                            <FontAwesomeIcon className="del-icon" icon={faTrash}/>
                        </div>
                    </div>
                </div>

                <div className="item-details-container">
                    <img className="item-img" src={musicData.music_image} alt="music-item" />
                    <div className="item-details-text">
                        <div>
                            <p>{musicData.name}</p>
                            <p>{musicData.composer}</p>
                            <p>HKD {musicData.price}</p>
                        </div>
                        <div className="qty-icon-container">
                            <p>Quantity: 10</p>
                            <FontAwesomeIcon className="del-icon" icon={faTrash}/>
                        </div>
                    </div>
                </div>
                <div className="item-details-container">
                    <img className="item-img" src={musicData.music_image} alt="music-item" />
                    <div className="item-details-text">
                        <div>
                            <p>{musicData.name}</p>
                            <p>{musicData.composer}</p>
                            <p>HKD {musicData.price}</p>
                        </div>
                        <div className="qty-icon-container">
                            <p>Quantity: 10</p>
                            <FontAwesomeIcon className="del-icon" icon={faTrash}/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="checkout-button"> Checkout </button>
        </div>
    )
}

export default Cart;

const musicData = {
    name: "Claudio Monteverdi: Madrigals",
    category: "Baroque",
    composer: "Claudio Monteverdi",
    description:"Claudio Giovanni Antonio Monteverdi was an Italian composer, gambist, singer and Roman Catholic priest. Monteverdi's work, often regarded as revolutionary, marked the transition from the Renaissance style of music to that of the Baroque period...",
    price: 200,
    published: "1587-1651",
    new_arrival: false,
    music_image: "https://i.ibb.co/sg85gxq/img-5.jpg",
    music_clip: ""
}