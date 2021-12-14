import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Blog app</h1>
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/blogs">Blogs</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            
        </header>
    )
}

export default Header
