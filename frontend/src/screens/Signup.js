import React, { useState } from 'react'
import axios from 'axios'
import './css/Login.css'
import { Link } from "react-router-dom";

const signUpHandler = async (email, password) => {
    if(email === '' || password === ''){
        alert("Please fill the empty fields and try again!")
    }
    else {
        const userDeatils = {
            email,
            password
        };
        await axios.post('https://music-store-3322.herokuapp.com/v1/user/signup', userDeatils)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .then(alert('Account Successfully Created'))

        logInHandler(email, password)
    }
}

const logInHandler = async (email, password) => {
    let user
    const userDeatils = {
        email,
        password
    }

    await axios.post('https://music-store-3322.herokuapp.com/v1/access/login', userDeatils)
    .then(res => user = res.data)
    .catch(err => console.log(err))
    .then(alert('Account Logged In'))

    localStorage.setItem('user', JSON.stringify(user))

    window.location.reload()
}

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="loginContainer signupContainer">
            <h1 className="sectionTitle-signin">Sign Up</h1>
            <p className="welcome-signin">Create an Account for our Music Store!</p>
            <div>    
                <label> Email </label>
                <input 
                    type="text"
                    placeholder="Desired Username" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>    
                <label> Password </label>
                <input 
                    type="password"
                    placeholder="Desired Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                style={{"margin-bottom" :"10px"}}
                onClick={() => signUpHandler(email, password)}
            >Submit</button>
            <Link to="/login"><button style={{"width": "30%", "paddingLeft": "15px"}}>Back</button></Link>
        </div>
    )
}

export default Signup
