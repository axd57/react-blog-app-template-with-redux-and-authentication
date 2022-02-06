import React from "react";
import { login } from "../actions/auth";


const LoginPage = () =>{
    return(
    <div>
        <p>Login Page</p>
        <hr />
        <button onClick={login}>Login</button>
    </div>
    )
}

export default LoginPage;