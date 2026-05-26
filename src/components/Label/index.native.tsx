import React from 'react';
import { TextProps } from 'react-native';
import { StyledLabel } from './styles.native';

interface LabelProps extends TextProps {
  children: React.ReactNode;
}

export function Label({ children, ...rest }: LabelProps) {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
}
