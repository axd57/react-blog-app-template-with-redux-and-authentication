import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Blog app</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </header>
    )
}

export default Header
