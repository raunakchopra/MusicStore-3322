import React from 'react'
import './css/Login.css'

function Login() {
    return (
        <div className="loginContainer">
            <h1 className="sectionTitle-signin">Sign In</h1>
            <p className="welcome-signin">Welcome Back!</p>
            <div>    
                <label for="email"> Email </label>
                <input 
                    type="text"
                    placeholder="youremail@mail.com" 
                />
            </div>
            <div>    
                <label for="password"> Password </label>
                <input 
                    type="text"
                    placeholder="******" 
                />
            </div>
            <button>Submit</button>
            <p className="signup-link">Create an Account!</p>
        </div>
    )
}

export default Login
