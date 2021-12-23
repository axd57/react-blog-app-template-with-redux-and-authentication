import React from 'react'
import { useParams } from 'react-router-dom';

//React redux daki elemanlara erişmek için
import { connect } from 'react-redux';
import BlogDetailsItem from './BlogDetailsItem';

let id = "";

const BlogDetailsPage = (props) => {
    id = useParams().id;
    
    console.log("hi", id);
    return (
        <div>
            <BlogDetailsItem {...props.blog}/>
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

export default connect(mapStateToProps)(BlogDetailsPage);
