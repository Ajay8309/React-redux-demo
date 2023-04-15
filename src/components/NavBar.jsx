import {React, useState} from 'react'
import styled from 'styled-components'
import CreatePostModal from './CreatePostModal';


export default function NavBar() {

   
    const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false); 

  return (
    <Container>
        <nav>
            <div className="logo">
               <h3>Dashboard</h3>
            </div>

            <div className="btn">
                <button onClick={() => setCreatePostModalOpen(true)}>Create new Post</button>
            </div>
        </nav>

        {isCreatePostModalOpen && (
      <CreatePostModal onClose={() => setCreatePostModalOpen(false)} />
    )}
    </Container>
  )
}

const Container = styled.div`
nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:5px;
    background-color:grey;
    color: #f7f7f7;
    box-shadow: #bcbaba 0px 8px 5px 0px;
    text-shadow: #d4cfcf 3px 2px 2px;
}

.btn{
   margin-right:10px;
}

.logo{
    margin-left:10px;
}
`;
