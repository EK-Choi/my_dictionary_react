import React from "react";
import styled from "styled-components";
import {Text, Grid} from "../elements";

const Input = (props) => {
  const {label, placeholder, _onchange} = props;
  return(
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput placeholder={placeholder} onChange={_onchange}/>
      </Grid>
    </React.Fragment>
  )
};

Input.defaultProps = {
  label: '텍스트',
  placeholder: '입력해주세요',
  _onchange: () => {}
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;