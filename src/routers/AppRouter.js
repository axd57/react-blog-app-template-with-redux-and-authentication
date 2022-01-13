import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
import LoginPage from '../components/LoginPage'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<LoginPage/>} />
                    <Route path='/blogs' element={<BlogListPage/>} />
                    <Route path='/create' element={<AddBlogPage/>} />
                    <Route path='/edit/:id' element={<EditBlogPage/>} />
                    <Route path='/blogs/:id' element={<BlogDetailsPage/>} />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
