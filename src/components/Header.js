import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {logout} from "../actions/auth"

const Header = () => {
    let navigate = useNavigate();
    return (
        <header>
            <h1>Blog App Template</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button style={{marginLeft: "15px"}} onClick={_=>{
                logout();
                navigate("/");
            }}>Logout</button>
        </header>
    )
}

export default Header
