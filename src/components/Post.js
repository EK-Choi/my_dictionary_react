import React from "react";
import {Grid, Text} from "../elements";

// import {Grid, Image, Text} from "../../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <Grid padding="16px">
          <Grid padding="5px">
            <Grid is_flex>
              <Text underline>단어</Text> <Text>{props.insert_dt}</Text>
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