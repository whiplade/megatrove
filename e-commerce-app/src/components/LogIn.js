import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LogIn({ setIsLoggedIn, setUser }) {
    // const [signedUpData, setSignedUpData] = useState([])

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
   
           function handleSubmit(e){
            e.preventDefault()
      
            // fetch('http://localhost:3001/users', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            // })
    
            // .then(response => response.json())
            // .then(data => setSignedUpData(data))
            // .catch(error => console.log(error))
            const signUpData=JSON.parse(localStorage.getItem("formData"))
    
            //  const stringData =JSON.stringify(formData)
            //  console.log(stringData)
                // signedUpData.filter((user) => {
                // const SignUpDetails =JSON.parse(user)
                if (signUpData.email === formData.email && signUpData.password === formData.password) {
                    alert("Welcome "  +signUpData.first_name)
                    setIsLoggedIn(true)
                    setUser(signUpData.first_name)
                    // window.location.assign("/")
                    return setIsLoggedIn
                }
                else {
                    // setIsLoggedIn(false)
                    alert("Invalid Credentials")
                    return console.log(false)
                }
            }
    
               
    
    
    

    function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData, [key]: value
        })
    }
    return (
        <div id="login">

            <form onSubmit={handleSubmit}>
                <table>
                    <tr><td><label htmlFor="email">Email</label></td>
                        <td><input
                            type='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                        /></td></tr>

                    <tr><td><label htmlFor="password">Password</label></td>
                        <td><input
                            type='password'
                            id='password'
                            value={formData.password}
                            onChange={handleChange}
                        /></td></tr>
                    <tr><td><input className="log-in" type="submit" value="Log in" /></td></tr>
                    <tr><td><NavLink to="/signup" >
                        Don't have an account? SignUp
                    </NavLink></td></tr>
                </table>
            </form>
        </div>
    )
}
export default LogIn