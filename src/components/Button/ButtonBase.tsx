import { ThemeTypographyVariants } from "@src/theme/theme"
import styled from 'styled-components';
import Text from "../Text/Text";
import React from 'react';

const StyledButton = styled(Text)<any>`
`;

interface ButtonBase{
  children:React.ReactNode;
  textVariant? : ThemeTypographyVariants;
}

const Tag= 'button';

export default function ButtonBase({textVariant,children,...props}:ButtonBase){

  return(
    <StyledButton   as={Tag} {...props}>
      {children}
    </StyledButton>
  )
}
