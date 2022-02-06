import React from 'react'
import BlogForm from './BlogForm'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBlogFromeDatabase, editBlogFromeDatabase } from '../actions/blogs';
import { useNavigate } from 'react-router-dom';

const EditBlogPage = (props) => {
    const navigate = useNavigate();
    const blogId = useParams().id;
    
    let cBlog = props.blogs.find(blog =>  blog.id === blogId)
    
    return (
        <div>
            <h1>Edit Blog</h1>
            <BlogForm 
                blog={cBlog}
                onSubmit = {(blog) => {
                    props.dispatch(editBlogFromeDatabase(cBlog.id, blog));
                    navigate("/blogs");
                }}
            />
            <button onClick={() =>{
                props.dispatch(removeBlogFromeDatabase(cBlog.id));
                navigate("/blogs");
            }}>Delete</button>
        </div>
    )
}

const mapStateToProps = (store) => {
    return{
        blogs: store.blogs
    }
}


export default connect(mapStateToProps)(EditBlogPage);
