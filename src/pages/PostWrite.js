import React from "react";
import {Grid, Text, Input, Button} from "../elements";
import styled from "styled-components";

const PosWrite = (props) => {
  return(
    <React.Fragment>
      <Header>
        <h3>단어 추가하기</h3>
      </Header>
      <Grid padding="16px">
        <Grid padding="16px 0px">
          <Input label="단어" placeholder="단어를 입력해주세요." _onChange={() => {console.log("단어입력됨");}}/>
        </Grid>
        <Grid padding="16px 0px">
          <Input label="설명" placeholder="설명을 입력해주세요." _onChange={() => {console.log("설명입력됨");}}/>
        </Grid>
        <Grid padding="16px 0px">
          <Input label="예시" placeholder="예시를 입력해주세요." _onChange={() => {console.log("예시입력됨");}}/>
        </Grid>
        <Button text="추가하기" _onClick={() => {console.log("추가");}}></Button>
      </Grid>
    </React.Fragment>
  )
}

const Header = styled.div`
  padding: 0 16px;
`;

export default PosWrite;