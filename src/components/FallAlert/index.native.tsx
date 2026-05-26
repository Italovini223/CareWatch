import { AlertTriangle, X } from 'lucide-react-native';
import {
  AlertWrapper,
  AlertBox,
  AlertIconWrapper,
  AlertContent,
  AlertTitle,
  AlertMessage,
  AlertHint,
  DismissButton,
} from './styles.native';

interface FallAlertProps {
  onDismiss: () => void;
  elderName: string;
  time: string;
}

export function FallAlert({ onDismiss, elderName, time }: FallAlertProps) {
  return (
    <AlertWrapper>
      <AlertBox>
        <AlertIconWrapper>
          <AlertTriangle size={20} color="#ffffff" />
        </AlertIconWrapper>
        <AlertContent>
          <AlertTitle>ALERTA DE QUEDA!</AlertTitle>
          <AlertMessage>
            {elderName} pode ter sofrido uma queda às {time}
          </AlertMessage>
          <AlertHint>Verifique imediatamente a situação</AlertHint>
        </AlertContent>
        <DismissButton onPress={onDismiss}>
          <X size={16} color="#ffffff" />
        </DismissButton>
      </AlertBox>
    </AlertWrapper>
  );
}
