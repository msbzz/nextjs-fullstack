import { ThemeTypographyVariants } from "@src/theme/theme"
import styled from 'styled-components';
import Text from "../Text/Text";
import React from 'react';

import { useRipple } from "react-use-ripple";

const StyledButton = styled(Text)<any>`
`;

interface ButtonBase{
  children:React.ReactNode;
  textVariant? : ThemeTypographyVariants;
}


export default function ButtonBase({textVariant,children,...props}:ButtonBase){

  const Tag= 'button';
  const ref = React.useRef();
  useRipple(ref);

  return(
    <StyledButton ref={ref}  as={Tag} {...props}>
      {children}
    </StyledButton>
  )
}
