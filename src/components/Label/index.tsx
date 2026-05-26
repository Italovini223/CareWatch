import { ViewProps } from 'react-native';
import { StyledLabel } from './styles';

interface LabelProps extends ViewProps {
  children: React.ReactNode;
}

export function Label({ children, ...rest }: LabelProps) {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
}
