import React from "react";
import styled from "styled-components";

import Post from "../components/Post";

const PostList = (props) => {
  return(
    <React.Fragment>
      <Header onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
        <h3>신조어 사전</h3>
      </Header>
      <Back>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Back>
    </React.Fragment>
  )
}

const Header = styled.div`
  width: 100%;
  padding: 15px 20px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  & h3{
    margin: 0px;
    color: rgb(58, 58, 58);
    cursor: pointer
  }
`;

const Back = styled.div`
  margin-top: 60px;
`;

export default PostList;