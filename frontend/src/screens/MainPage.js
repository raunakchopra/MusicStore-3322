import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import MusicBox from '../components/MusicBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons'

import './css/MainPage.css'

function MainPage() {
    const [musicData, setMusicData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/v1/music/', {
        'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => {
            setMusicData(res.data.musicItems)
            setFilterData(res.data.musicItems)
        })
        .catch(err => console.log(err))

        const loggedInUser = JSON.parse(localStorage.getItem("user"));
    }, [])

    const handleFilterData = (category) => {
        let temp = []
        for(let i=0; i<musicData.length; ++i){
            if(musicData[i].category === category){
                temp.push(musicData[i])
            }
        }
        setFilterData(temp)
    }


    return (
        <div className="mainpage-container">
            <div className="side-section">
                <p className="category-title">Categories</p>
                <div className="category-container" onClick={() => handleFilterData("Classical")}>
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Classical</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Baroque")}>
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Baroque</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Romantic")}>
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Romantic</p>
                </div>
                <div className="category-container" onClick={() => handleFilterData("Late 19th")}>
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Late 19th</p>
                </div>
            </div>
            <div className="main-section">
                {
                    filterData.map((musicItem) => <Link to={`/music/${musicItem._id}`}><MusicBox item={musicItem} /></Link>)
                }
            </div>
        </div>
    )
}

export default MainPage
