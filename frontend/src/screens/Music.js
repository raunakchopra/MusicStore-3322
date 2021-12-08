import React, {useEffect, useState} from 'react'
import './css/Music.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const handleAddToCart = (data, qty) => {
    let currCart = JSON.parse(localStorage.getItem("cart"));

    let newCartItem = {
        data,
        qty
    }

    if(currCart !== null) {
        currCart = [...currCart, newCartItem]
    }
    else{
        currCart = [newCartItem]
    }
    localStorage.setItem('cart', JSON.stringify(currCart))
    window.open('/cart', '_self')
}


function Music() {
    const [qty, setQty] = useState(0)
    const { id } = useParams()
    const [item] = useState(id)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/music/${item}`, {
            'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => setData(res.data.music))
        .catch(err => console.log(err))
    }, [item])

    return (
        <div>
            <div className="music-box">
                <p className="navigator-musicbox"><Link to="/"> Home </Link > {data.name}</p>
                <h1 className="music-box-title">{data.name}</h1>
                <img 
                    src={data.music_image}
                    alt="musicimg"
                    className="music-image"
                />
                <audio controls className="audio">
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>    
                <p className="music-box-desc">
                    {data.description}
                </p>
                <div className="music-box-info-text">
                    <p> Composer: <b>{data.composer}</b></p>
                    <p> Published: <b>{data.published}</b></p>
                </div>
                <div className="music-box-info-text">
                    <p>New Arrival: <b>{ data.new_arrival ? 'Yes' : 'No' }</b></p>
                    <p>Price: <b>HKD{data.price}</b></p>
                </div>

                <div className="order-block">
                    <input 
                        type="text" 
                        placeholder="Quantiy"
                        onChange={(e) => setQty(parseInt(e.target.value))}
                        className="qty-music-box" 
                    />
                        <button 
                            className="button-order"
                            onClick={() => handleAddToCart(data, qty)}
                        >Order</button>
                </div>
            </div>
        </div>
    )
}

export default Music