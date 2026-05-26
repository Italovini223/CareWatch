import { AlertTriangle, X } from 'lucide-react';
import {
  AlertWrapper,
  AlertBox,
  AlertIconWrapper,
  AlertContent,
  AlertTitle,
  AlertMessage,
  AlertHint,
  DismissButton,
} from './styles';

interface FallAlertProps {
  onDismiss: () => void;
  elderName: string;
  time: string;
}

export function FallAlert({ onDismiss, elderName, time }: FallAlertProps) {
  return (
    <AlertWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <AlertBox>
        <AlertIconWrapper>
          <AlertTriangle size={24} />
        </AlertIconWrapper>
        <AlertContent>
          <AlertTitle>⚠️ ALERTA DE QUEDA!</AlertTitle>
          <AlertMessage>
            {elderName} pode ter sofrido uma queda às {time}
          </AlertMessage>
          <AlertHint>Verifique imediatamente a situação</AlertHint>
        </AlertContent>
        <DismissButton onPress={onDismiss}>
          <X size={20} />
        </DismissButton>
      </AlertBox>
    </AlertWrapper>
  );
}
