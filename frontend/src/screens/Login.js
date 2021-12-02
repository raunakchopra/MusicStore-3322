import React, {useState} from 'react'
import axios from 'axios'
import './css/Login.css'

const logInHandler = async (email, password) => {
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
                    type="text"
                    placeholder="******" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                onClick={() => logInHandler(email, password)}
            >Submit</button>
            <p className="signup-link">Create an Account!</p>
        </div>
    )
}

export default Login
