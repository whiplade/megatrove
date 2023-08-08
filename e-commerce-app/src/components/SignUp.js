import React, { useState } from 'react'
import "./accounts.css"




function SignUp() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    function HandleSubmit(e) {
        // const auth = useAuth()
        // const navigate = useNavigate()
        e.preventDefault()
        // fetch('http://localhost:3001/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error))
        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Registration Successfull")
        window.location.assign('/login')
    }


    function handleChange(event){
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData, [key]: value
        })

    }
    return (
        <div id="signup">
            <form onSubmit={HandleSubmit}>
                <table>
                    <tr><th>Create Account</th></tr>
                    <tr><td><label htmlFor="first_name">First Name:</label></td>
                        <td><input
                            type='text'
                            id='first_name'
                            value={formData.first_name}
                            onChange={handleChange}
                        /></td></tr>
                    <tr><td><label htmlFor="last_name">Last Name:</label></td>
                        <td><input
                            type='text'
                            id='last_name'
                            value={formData.last_name}
                            onChange={handleChange}
                        /></td></tr>
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
                    <tr><td><input type="submit" value="Sign Up" /></td></tr>
                </table>

            </form>
        </div>
    )
}
export default SignUp