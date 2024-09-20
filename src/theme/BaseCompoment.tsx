import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseCompoment{
  styleSheet?:StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseCompoment>`
   ${({styleSheet})=>parseStyleSheet(styleSheet)}
`

export const BaseCompoment=(props)=>{
  return(
    <StyledBaseComponent {...props}/>
  )
}

BaseCompoment.defaultProps= {
  styleSheet:{},
}
