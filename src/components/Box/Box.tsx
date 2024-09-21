
import React from 'react';
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseCompoment } from '@src/theme/BaseCompoment';

interface BoxProps{
  tag?: 'main'| 'div'| 'article'|'section'|'ul'| string;
  children?: React.ReactNode;
  styleSheet?:StyleSheet;
}

export default function Box({styleSheet,children,tag,...props}:BoxProps){

 const Tag =tag || 'div';
 return  (
  <BaseCompoment as={Tag} styleSheet={styleSheet} {...props}>
     {children}
  </BaseCompoment>
 )
}
