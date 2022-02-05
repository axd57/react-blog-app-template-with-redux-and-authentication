import React from 'react';
//React redux daki elemanlara erişmek için
import { connect } from 'react-redux';

import BlogListItem from "./BlogListItem"

const BlogList = (props) => {
    return (
        <ul>
            {props.blogs.map(blog =>{
                return <BlogListItem key={blog.id} {...blog}/>
            })}
        </ul>
    )
}

//index.js deki provider dan gelen veriler. store
const mapStateToProps = (store) => {
    return{
        blogs: store.blogs
    }
}

// Higher order component
export default connect(mapStateToProps)(BlogList);
