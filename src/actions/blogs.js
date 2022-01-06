import database  from "../firebase/firebaseConfig";
import { getDatabase, ref, set, remove, update, onValue, child, get, push, onChildRemoved, onChildAdded } from "firebase/database";
//Action creator
export const addBlog = (blog) => ({
  type: "ADD_BLOG",
  blog
});

export const addBlogToDatabase = (blogData = {}) =>{
  return (dispatch) => {
    const {title = "", description = "", dateAdded = 0} = blogData;
    const blog = {title, description, dateAdded};

    push(ref(database, "blogs"), blog).then((res) => {
      dispatch(addBlog({
          id: res.key,
          ...blog
      }));
    });
  }
}

export const removeBlog = ({id}) => (
  {
    type: "REMOVE_BLOG",
    id: id
  }
);

export const removeBlogFromeDatabase = (id) =>{
  return (dispatch) =>{
    return remove(ref(database, `blogs/${id}`)).then(() => {
      dispatch(removeBlog(id));
    });
  }
}

export const editBlog = (id, updates) =>({
  type: "EDIT_BLOG",
  id,
  updates
});

export const editBlogFromeDatabase = (id, updates) =>{
  return (dispatch) =>{
    return update(ref(database, `blogs/${id}`), updates).then(()=>{
      dispatch(editBlog(id, update));
    });
  }
}

export const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs
});


export const getBlogsFromDatabase = () => {
  return (dispatch) => {
    return get(child(ref(database), "blogs")).then((snapshot) => {
          if (snapshot.exists()) {
            const blogs = [];
            
            snapshot.forEach((blog) =>{
              blogs.push({
                id: blog.key,
                ...blog.val()
              })
            });

            dispatch(setBlogs(blogs));


          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
  }
}