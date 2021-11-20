import React from 'react'

import './css/musicbox.css'

function MusicBox() {
    return (
        <div className="musicbox-container">
            {/* name, image, composer, price */}
            <img 
                className="music-image"
                alt="music_image"
                src={musicData.music_image} />
            <p className="musicbox-name">{musicData.name}</p>
            <p>Composer: <b>{musicData.composer}</b></p>
            <p>Price: <b>HKD{musicData.price}</b></p>
        </div>
    )
}

export default MusicBox


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
