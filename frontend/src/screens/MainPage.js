import React, {useEffect, useState} from 'react'
import { Link,useLocation } from "react-router-dom";
import axios from 'axios'
import MusicBox from '../components/MusicBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons'

import './css/MainPage.css'

function MainPage() {
    const [musicData, setMusicData] = useState([])
    const [searchState, setSearchState] = useState(false)
    let search = ''
    const location = useLocation()
    if(location.search !== ''){
        search = location.search.slice(7)
    }

    useEffect(() => {
        axios.get('https://music-store-3322.herokuapp.com/v1/music/')
        .then(res => {
            if(search !== ''){
                setSearchState(true)
                search = search.split(" ")
                let temp = []
                for(let j = 0; j<search.length; j++){
                    for(let i=0; i<res.data.musicItems.length; ++i){
                        if(res.data.musicItems[i].name.includes(search[j]) || 
                        res.data.musicItems[i].composer.includes(search[j])) {
                            temp.push(res.data.musicItems[i])
                        }
                    }
                }
                setMusicData(temp)
            }
            else{
                setMusicData(res.data.musicItems)
            }
        })
        .catch(err => console.log(err))
    }, [search])

    return (
        <div className="mainpage-container">
            <div className="side-section">
                <p className="category-title">Categories</p>
                <Link 
                    to="/category?category=classical"
                >
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                        <p>Classical</p>
                    </div>
                </Link>
                <Link to="/category?category=baroque">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                        <p>Baroque</p>
                    </div>
                </Link>
                <Link to="/category?category=romantic">
                    <div className="category-container" >
                        <FontAwesomeIcon className="category-icon" icon={faDrum}/>
                        <p>Romantic</p>
                    </div>
                </Link>
                <Link to="/category?category=late_19th">
                    <div className="category-container">
                        <FontAwesomeIcon className="category-icon" icon={faGuitar}/>
                        <p>Late 19th</p>
                    </div>
                </Link>
            </div>
            <div className="main-section">
                <p className="navigator">Home</p>
                { searchState ? <p className="navigator"> Searching Results</p> : ""}
                <div className="main-section-inner">
                    {
                        musicData.map((musicItem) => <Link to={`/music/${musicItem._id}`}><MusicBox item={musicItem} /></Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage
