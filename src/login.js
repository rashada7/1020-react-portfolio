import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert("Invalid Login")
        } else {
            
            alert("Login Successful!")
            sessionStorage.setItem('token', payload.token)
            //
            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }
    
    return (
        
        <div class="formContainer">
        <h1>Admin Login</h1>
        <form onSubmit={loginSubmit}>
          
                <label for="usernameEntry">Email</label>
                <input type="email" name="email" id="emailEntry" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
              
                <label for="passwordEntry">Password</label>
                <input type="password" name="password" id="passwordEntry" placeholder="Valid password" value={password} onChange={e => setPassword(e.target.value)}/>
              
          <button class="button">Sign in</button>
        </form>
        </div>
    )
}

export default Login
    
