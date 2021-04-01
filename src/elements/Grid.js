import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {is_flex, width, padding, margin, bg, boxshadow, max_width, children} = props;
  const styles ={
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
    boxshadow: boxshadow,
    max_width: max_width,
  };

  return(
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  )
}

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  max_width: false,
  padding: false,
  margin: false,
  bg: false,
  boxshadow: false,
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props)=> props.padding? `padding: ${props.padding}`: ""};
  ${(props)=> props.margin? `margin: ${props.margin}`: ""};
  ${(props)=> props.bg? `background-color: ${props.bg}`: ""};
  ${(props)=> props.is_flex? `display: flex; align-items: center; justify-content: space-btween;`: ""};
  ${(props)=> props.boxshadow? `box-shadow: 1px 1px 3px gray`: ""};
  ${(props)=> props.max_width? `max-width: 1000px`: ""};
`;

export default Grid;