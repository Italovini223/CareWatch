import { LucideIcon } from 'lucide-react';
import {
  Container,
  Row,
  IconWrapper,
  Info,
  StatLabel,
  ValueRow,
  StatValue,
  StatUnit,
} from './styles';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit?: string;
  status?: 'normal' | 'warning' | 'danger';
  onClick?: () => void;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  unit,
  status = 'normal',
  onClick,
}: StatCardProps) {
  return (
    <Container onPress={onClick}>
      <Row>
        <IconWrapper $status={status}>
          <Icon size={24} />
        </IconWrapper>
        <Info>
          <StatLabel>{label}</StatLabel>
          <ValueRow>
            <StatValue>{value}</StatValue>
            {unit && <StatUnit>{unit}</StatUnit>}
          </ValueRow>
        </Info>
      </Row>
    </Container>
  );
}
