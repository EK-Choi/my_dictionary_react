import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {bold, color, size, underline, margin, children} = props;
  const styles = {bold:bold, color:color, size:size, margin:margin, underline:underline}

  return(
    <P {...styles}>
      {children}
    </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '13px',
  text_decoration: false,
  margin: false,
}

const P = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  text-decoration: ${(props) => (props.underline? 'underline' : "")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
`;

export default Text;