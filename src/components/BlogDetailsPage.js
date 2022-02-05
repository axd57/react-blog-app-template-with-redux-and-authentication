import React from 'react'
import { useParams } from 'react-router-dom';

//React redux daki elemanlara erişmek için
import { connect } from 'react-redux';
import BlogDetailsItem from './BlogDetailsItem';

const BlogDetailsPage = (props) => {
    const blogId = useParams().id;
    
    let cBlog = props.blogs.find(blog =>  blog.id === blogId)
    
    return (
        <div>
            <BlogDetailsItem {...cBlog}/>
        </div>
    )
}

//index.js deki provider dan gelen veriler. store
const mapStateToProps = (store) => {
    return{
        blogs: store.blogs
    }
}

export default connect(mapStateToProps)(BlogDetailsPage);
