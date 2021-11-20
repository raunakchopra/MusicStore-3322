import React from 'react'
import './css/Music.css'

function Music() {
    return (
        <div className="music-box">
            <h1 className="music-box-title">{musicData.name}</h1>
            <img 
                src={musicData.music_image}
                alt="musicimg"
                className="music-image"
            />
            <audio controls className="audio">
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>    
            <p className="music-box-desc">
                {musicData.description}
            </p>
            <div className="music-box-info-text">
                <p> Composer: <b>{musicData.composer}</b></p>
                <p> Published: <b>{musicData.published}</b></p>
            </div>
            <div className="music-box-info-text">
                <p>New Arrival: <b>{ musicData.new_arrival ? 'Yes' : 'No' }</b></p>
                <p>Price: <b>HKD{musicData.price}</b></p>
            </div>

            <div className="order-block">
                <input 
                    type="text" 
                    placeholder="Quantiy"
                    className="qty-music-box" 
                />
                <button className="button-order">Order</button>
            </div>
        </div>
    )
}

export default Music


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
