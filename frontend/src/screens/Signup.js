import React from 'react'
import './css/Login.css'

function Signup() {
    return (
        <div className="loginContainer signupContainer">
            <h1 className="sectionTitle-signin">Sign Up</h1>
            <p className="welcome-signin">Create an Account for our Music Store!</p>
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
        </div>
    )
}

export default Signup
