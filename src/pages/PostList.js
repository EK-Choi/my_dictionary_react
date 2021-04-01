import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  React.useEffect(() => {
    // if(post_list.lenth === 0){}
    dispatch(postActions.getPostFB());
  },[]);

  return(
    <React.Fragment>
      <Header onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
        <h3>신조어 사전</h3>
      </Header>
      <Back>
        {/* <Post/> */}
        {post_list.map((p,idx) => {
          return <Post key={p.id} {...p}/>
        })}
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
  cursor: pointer;
  transition: all .4s linear;
  :hover{
    background-color: rgb(230, 234, 235);
  }

  & h3{
    margin: 0px;
    color: rgb(58, 58, 58);
  }
`;

const Back = styled.div`
  margin-top: 60px;
`;

export default PostList;