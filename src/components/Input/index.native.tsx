import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { InputContainer, StyledInput, ErrorText } from './styles.native';

type InputProps = TextInputProps & {
  errorMessage?: string | null;
};

export function Input({ placeholderTextColor, errorMessage, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  const isInvalid = !!errorMessage;

  return (
    <InputContainer>
      <StyledInput
        placeholderTextColor={placeholderTextColor || COLORS.GRAY[400]}
        $isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && <ErrorText>{errorMessage}</ErrorText>}
    </InputContainer>
  );
}
