import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { StyledInput } from './styles.native';

export function Input({ placeholderTextColor, ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return (
    <StyledInput
      placeholderTextColor={placeholderTextColor || COLORS.GRAY[400]}
      {...rest}
    />
  );
}
