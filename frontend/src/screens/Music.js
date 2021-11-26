import React, {useEffect, useState} from 'react'
import './css/Music.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Music() {
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

    console.log(data)

    return (
        <div className="music-box">
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
                    className="qty-music-box" 
                />
                <button className="button-order">Order</button>
            </div>
        </div>
    )
}

export default Music


const data = {
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
