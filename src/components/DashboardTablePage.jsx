
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/postsActions";
import styled from "styled-components";
import PostDetails from "./postDetails"
// import CreatePostModal from "./CreatePostModal";


const DashboardTablePage = ({ posts, loading, error, fetchPosts }) => {
  
  const [selectedPost, setSelectedPost] = useState(null);

  // console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRowClick = post => {
    // console.log("Selected post:", post);
    setSelectedPost(post);
  };

 

  return (
      <Container>
      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} onClick={() => setSelectedPost(post)}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="details">
         {selectedPost && <PostDetails post={selectedPost} />}
      </div>

      </Container>
    );
};

const Container = styled.div`
 display:flex;
 justify-content:space-between;
 .details{
  border:2px solid grey;
  border-radius:8px;
  height:50vh;
  width:30vw;
  margin-right:9rem;
  margin-top:4rem;
  top: 0;
  position:sticky;
  padding:1rem;
 }
  table {
    border-collapse: collapse;
    border: 2px solid #ccc;
    margin-top: 1rem;
  }

  td,
  th {
    border: 1px solid #ccc;
    padding: 18px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    background-color: #ddd;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  button {
    margin-bottom: 1rem;
  }

 
`;

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
  };
};

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTablePage);

