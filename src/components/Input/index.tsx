import { TextInputProps } from 'react-native';
import React from 'react';
import { StyledInput } from './styles';

type InputProps = TextInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage: _errorMessage, ...rest }: InputProps) {
  return (
    <StyledInput {...rest} />
  )
}
