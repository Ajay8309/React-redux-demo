import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/postsActions';
import styled from 'styled-components';

const CreatePostModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [idd, setId] = useState(100);

  const handleFormSubmit = (e) => {
    e.preventDefault();
   // dispatch(createPost({ title, body }));
   dispatch(createPost({ title, body }));
    // Close modal
    onClose();
  };

  return (
    
    <Container>
      <div className="modal-content">
        <h2 className='post-head'>Create New Post</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Create Post</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
border:2px solid grey;
margin-top:2rem;
border-radius:8px;
   margin-left:400px;
   width:50vw;
   .modal-content{
    display:flex;
    flex-direction:column;
   }

   form{
    display:flex;
    flex-direction:column;
    border:2px solid red;
    width:35vw;
    margin-left: 15%;
    margin-bottom: 19px;
    padding:1rem;
    border:2px solid grey;
    border-radius:8px;
   }

   button{
    border-bottom: 2px solid black;
    margin-top:2px;
    border-top:2px solid black;
    
   }

   .post-head{
    margin-left:33%;
   }
`;

export default CreatePostModal;


