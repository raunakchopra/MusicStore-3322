import React, { useState } from 'react'
import axios from 'axios'
import './css/Login.css'

const signUpHandler = (email, password) => {
    const userDeatils = {
        email,
        password
    }
;
    axios.post('http://localhost:8080/v1/user/signup', userDeatils ,{
        'Access-Control-Allow-Origin': "http://localhost:8080"
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .then(alert('Account Successfully Created'))
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
                    placeholder="youremail@mail.com" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>    
                <label> Password </label>
                <input 
                    type="text"
                    placeholder="******" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button 
                onClick={() => signUpHandler(email, password)}
            >Submit</button>
        </div>
    )
}

export default Signup
