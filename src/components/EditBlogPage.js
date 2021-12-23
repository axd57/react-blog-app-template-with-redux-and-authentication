import React from 'react'
import BlogForm from './BlogForm'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { editBlog, removeBlog } from '../actions/blogs';
import { useNavigate } from 'react-router-dom';

let id = "";

const EditBlogPage = (props) => {
    id = useParams().id;
    const navigate = useNavigate();
    
    return (
        <div>
            Edit Page
            <BlogForm 
                blog={props.blog}
                onSubmit = {(blog) => {
                    props.dispatch(editBlog(props.blog.id, blog));
                    navigate("/blogs");
                }}
            />
            <button onClick={() =>{
                props.dispatch(removeBlog({id: props.blog.id}));
                navigate("/blogs");
            }}>Delete</button>
        </div>
    )
}

//index.js deki provider dan gelen veriler. store
const mapStateToProps = (state) => {
    return{
        blog: state.blogs.find((blog) => {
            return blog.id === id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);
