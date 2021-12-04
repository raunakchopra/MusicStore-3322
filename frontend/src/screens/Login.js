import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './css/Login.css'

const logInHandler = async (email, password) => {
    
    if(email === '' || password === ''){
        alert("Please fill the empty fields and try again!")
    }
    else{
        let user
        const userDeatils = {
            email,
            password
        }

        await axios.post('http://localhost:8080/v1/access/login', userDeatils ,{
            'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => user = res.data)
        .catch(err => console.log(err))
        .then(alert('Account Logged In'))

        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload()
    }
}

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="loginContainer">
            <h1 className="sectionTitle-signin">Sign In</h1>
            <p className="welcome-signin">Welcome Back!</p>
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
                    type="password"
                    placeholder="******" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                onClick={() => logInHandler(email, password)}
            >Submit</button>
            <Link to="/signup"><p className="signup-link">Create an Account!</p></Link>
        </div>
    )
}

export default Login
