import React from "react";
import { login } from "../actions/auth";


const LoginPage = () =>{
    return(
    <div>
        <div>Login Page</div>
        <hr />
        <button onClick={login}>Login</button>
    </div>
    )
}

export default LoginPage;