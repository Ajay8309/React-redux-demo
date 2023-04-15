// import { BUY_CAKE } from "./cakeType"
import axios from 'axios'
// export const buyCake = () =>{
//     return {
//         type: BUY_CAKE
//     }
// }

// postsActions.js

export const fetchPosts = () => {
    return dispatch => {
      dispatch({ type: "FETCH_POSTS_REQUEST" });
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
        })  
        .catch(error => {
          dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
        });
    };
  };
  

  // export const createPost = (post) => {
  //   return async (dispatch) => {
  //     dispatch({ type: 'CREATE_POST_REQUEST' });
  
  //     try {
  //       // Send POST request to the API with the post data
  //       const response = await axios.post('/posts', {
  //         id: post.id,
  //         title: post.title,
  //         body: post.body,
  //       });
  
  //       // Dispatch success action with the created post data
  //       dispatch({
  //         type: 'CREATE_POST_SUCCESS',
  //         payload: response.data,
  //       });
  //     } catch (error) {
  //       // Dispatch error action if request fails
  //       dispatch({ type: 'CREATE_POST_FAILURE', payload: error.message });
  //     }
  //   };
  // };
  


//  const CREATE_POST = 'CREATE_POST';

  // Action creator for creating a post
export const createPost = (postData) => {
  // Make API request to create a post with the provided data
  return (dispatch) => {
    // You can update the API endpoint and payload structure here
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData), // Use the provided postData as the payload
    })
      .then((response) => response.json())
      .then((data) => {
        // Dispatch action with the created post data
        dispatch({
          type: 'ADD_POST_SUCCESS',
          payload: data,
        });

        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error creating post:', error);
      });
  };
};