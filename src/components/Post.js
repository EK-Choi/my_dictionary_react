import React from "react";
import {Grid, Text} from "../elements";

const Post = (props) => {

    return (
      <React.Fragment>
        <Grid padding="15px" boxshadow margin="10px 0px" bg="rgb(251, 251, 249)">
          <Grid padding="5px">
            <Grid is_flex>
              <Grid is_flex width="75%">
                <Text underline>단어</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
              </Grid>
            </Grid>
            <Text size="20px" bold>{props.word}</Text>
          </Grid>
          <Grid padding="5px">
            <Text underline>설명</Text>
            <Text size="15px">{props.description}</Text>
          </Grid>
          <Grid padding="5px">
            <Text underline>예시</Text>
            <Text size="15px">{props.example}</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  word: "머선129",
  description: "무슨 일이야 의 사투리 표현의 변형",
  example: "아니 이게 머선129",
  insert_dt: "2021-02-27",
};

export default Post;