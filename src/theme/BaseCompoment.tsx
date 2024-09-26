import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseCompoment{
  styleSheet?:StyleSheet;
  ref:any;
}

const StyledBaseComponent = styled.div<StyledBaseCompoment>`
  display:flex;
  flex-direction:column;
  align-content:flex-start;
  flex-shirink:0;
   ${({styleSheet})=>parseStyleSheet(styleSheet)}
`
interface BaseCompomentProps {
  styleSheet:StyleSheet;
  [key:string]:any;
};

export const BaseCompoment=React.forwardRef<unknown,BaseCompomentProps>((props,ref)=>{
  return(
    <StyledBaseComponent ref={ref} {...props}/>
  )
});

BaseCompoment.defaultProps= {
  styleSheet:{},
}
