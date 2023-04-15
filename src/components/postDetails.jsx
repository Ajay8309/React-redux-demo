import React from 'react'
// import styled from 'styled-components';

export default function PostDetails({ post }) {
    return (
      <div>
        <h2>Details</h2>
        <p>{post.body}</p>
      </div>
    );
  }

  