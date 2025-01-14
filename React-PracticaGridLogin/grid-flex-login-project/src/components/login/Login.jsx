import React from 'react'
import './login.css'
//importar react-use-form


export default function Login() {
    return (
        <div className='container'>
            <div className='imgLoginContainer'>
                <img className='imgLogin' src="../../../public/login-image.jpg"/>
            </div>
            <div className='container-form'>
                <form className='form-login' action="">
                    <h1>Login</h1>
                    <input placeholder='usuario' type="text" />
                    <input placeholder='contrasena' type="password"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
