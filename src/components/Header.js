import React from 'react'
import { NavLink } from 'react-router-dom'
import {logout} from "../actions/auth"

const Header = () => {
    return (
        <header>
            <h1>Blog app</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button onClick={logout}>Logout</button>
        </header>
    )
}

export default Header
