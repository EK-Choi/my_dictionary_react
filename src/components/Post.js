import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

// import {Grid, Image, Text} from "../../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <div>word / insert_dt</div>
        <div>description</div>
        <div>example</div>
        {/* <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid> */}
      </React.Fragment>
    );
}

Post.defaultProps = {
  word: "머선129",
  description: "무슨 일이야 의 사투리 표현의 변형",
  example: "아니 이게 머선129",
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;