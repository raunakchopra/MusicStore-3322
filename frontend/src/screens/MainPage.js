import React from 'react'

import MusicBox from '../components/MusicBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons'

import './css/MainPage.css'

function MainPage() {
    return (
        <div className="mainpage-container">
            <div className="side-section">
                <p className="category-title">Categories</p>
                <div className="category-container">
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Classical</p>
                </div>
                <div className="category-container">
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Baroque</p>
                </div>
                <div className="category-container">
                    <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                    <p>Romantic</p>
                </div>
                <div className="category-container">
                    <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                    <p>Late 19th</p>
                </div>
            </div>
            <div className="main-section">
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
            </div>
        </div>
    )
}

export default MainPage
