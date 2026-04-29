import {  TouchableOpacityProps } from 'react-native'

import { Container } from './styles';

type ButtonProps = TouchableOpacityProps & {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', fullWidth, children, ...rest }: ButtonProps) {
  return (
    <Container
      variant={variant}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </Container>
  );
}
