import createDataContext from "./createDataContext";

const reducer = (state, action) => {

    switch (action.type) {
        case 'add_blogpost':
            return [...state, { 
                id: Math.floor(Math.random() * 9999), 
                title: action.payload.title,
                content: action.payload.content
                }
            ]
        case 'delete_blogpost':
            return state.filter(blog => blog.id !== action.payload)
        case 'edit_payload':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }

}

const addBlogPost = dispatch => {
   return async (title, content, callback) => {
       try{
            dispatch({ type:'add_blogpost' , payload: { title, content } })
            if(callback) {
                callback();
            }
       }
       catch (error){console.log(error)}
   }
}

const editBlogPost = dispatch => {
   return (id, title, content, callback) => {
     dispatch({ type: 'edit_payload', payload: {id : id , title: title, content:content }})
      if(callback) {
            callback();
        }
   }
}


const deleteBlogPost = dispatch => {
   return id => (
        dispatch({ type:'delete_blogpost', payload: id })
   )
}

export const { Context, Provider } = createDataContext(
    reducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
);
