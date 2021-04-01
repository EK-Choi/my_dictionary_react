import React from "react";
import {Grid, Text, Input, Button} from "../elements";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";

const PosWrite = (props) => {
  const dispatch = useDispatch();
  const {history} = props;
  
  const [word, setWord] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [example, setExample] = React.useState("");

  const addPost = () => {
    dispatch(postActions.addPostFB(word, description, example));
  }

  return(
    <React.Fragment>
      <Header>
        <h3>단어 추가하기</h3>
      </Header>
      <Grid padding="16px">
        <Grid padding="16px 0px">
          <Input label="단어" placeholder="단어를 입력해주세요." _onChange={(e) => {setWord(e.target.value)}}/>
        </Grid>
        <Grid padding="16px 0px">
          <Input label="설명" placeholder="설명을 입력해주세요." _onChange={(e) => {setDescription(e.target.value)}}/>
        </Grid>
        <Grid padding="16px 0px">
          <Input label="예시" placeholder="예시를 입력해주세요." _onChange={(e) => {setExample(e.target.value)}}/>
        </Grid>
        <Button text="추가하기" _onClick={addPost}></Button>
      </Grid>
    </React.Fragment>
  )
}

const Header = styled.div`
  padding: 0 16px;
`;

export default PosWrite;