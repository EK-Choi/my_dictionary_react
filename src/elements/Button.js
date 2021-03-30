import React from "react";
import styled from "styled-components";
import {Text, Grid} from "../elements";

const Button = (props) => {
  const {text, _onclick} = props;

  return(
    <React.Fragment>
      <ElButton onClick={_onclick}>{text}</ElButton>
    </React.Fragment>
  )
}

Button.defaultProps = {
  text: "텍스트",
  _onclick: () => {},
}

const ElButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 12px 0px;
  border: none;
  box-sizing: border-box;
`;

export default Button;