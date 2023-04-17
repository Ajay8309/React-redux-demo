// import { BUY_CAKE } from "./cakeType"
// import axios from 'axios'
// export const buyCake = () =>{
//     return {
//         type: BUY_CAKE
//     }
// }


export const fetchPosts = () => {
    return dispatch => {
      dispatch({ type: "FETCH_POSTS_REQUEST" });
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
          // localStorage.setItem('post', JSON.stringify(data));
        })  
        .catch(error => {
          dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
        });
    };
  };
  



  // Action creator for creating a post
export const createPost = (postData) => {
  
  return (dispatch) => {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData), 
    })
      .then((response) => response.json())
      .then((data) => {
     
        dispatch({
          type: 'ADD_POST_SUCCESS',
          payload: data,
        });
        // localStorage.setItem('post', JSON.stringify(data));
        console.log(data);
      })
      .catch((error) => {
        
        dispatch({ type: "ADD_POSTS_FAILURE", payload: error.message });
      });
  };
};