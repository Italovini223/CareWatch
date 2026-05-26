import { TextInputProps } from 'react-native';
import React from 'react';
import { StyledInput } from './styles';



export function Input({ ...rest }:  TextInputProps) {
  return (
    <StyledInput {...rest} />
  )
}
