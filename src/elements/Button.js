import React from "react";
import styled from "styled-components";
import {Text, Grid} from "../elements";

const Button = (props) => {
  const {text, _onClick, is_float} = props;

  if(is_float){
    return(
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      </React.Fragment>
    )
  }

  return(
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  )
}

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  is_float: false,
}

const ElButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 12px 0px;
  border: none;
  box-sizing: border-box;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgb(13, 54, 63);
  color: #ffffff;
  box-sizing: border-box;
  font-weight: 550;
  font-size: 35px;
  position: fixed;
  bottom: 50px;
  right: 17px;
  border-radius: 50px;
  border: none;
  transition: all .4s linear;
  :hover{
    background-color: rgb(224, 28, 28);
    transform: rotate(180deg);
  }
`;

export default Button;