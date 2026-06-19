import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, Calendar, AlertTriangle, MapPin, Clock } from 'lucide-react-native';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import {
  Screen,
  PageHeader,
  HeaderInner,
  BackButton,
  BackButtonText,
  PageTitle,
  DateRow,
  DateText,
  Content,
  StatsRow,
  StatItem,
  StatItemLabel,
  StatItemValue,
  AlertCard,
  AlertIconWrapper,
  AlertContent,
  AlertTitle,
  AlertText,
  SectionTitle,
  IncidentsList,
  IncidentCard,
  IncidentHeader,
  IncidentTitleRow,
  IncidentIconBox,
  IncidentTitleBlock,
  IncidentTitle,
  IncidentDate,
  SeverityBadge,
  IncidentMetaList,
  IncidentMetaItem,
  IncidentMetaText,
  VitalsBox,
  VitalsTitle,
  VitalsRow,
  VitalItem,
  VitalLabel,
  VitalValue,
  NotesSection,
  NotesLabel,
  NotesText,
  RespondedRow,
  RespondedDot,
  RespondedText,
  TipsCard,
  TipsTitle,
  TipItem,
  TipBullet,
  TipText,
} from './styles.native';

const fallIncidents = [
  {
    id: 1,
    date: '29 de março de 2026',
    time: '14:32',
    location: 'Sala de estar',
    severity: 'moderate',
    severityLabel: 'Moderada',
    responded: true,
    notes: 'Idosa levantou sozinha após 2 minutos. Sem ferimentos aparentes.',
    vitals: { heartRate: 95, bloodPressure: '135/88' },
  },
  {
    id: 2,
    date: '25 de março de 2026',
    time: '08:15',
    location: 'Banheiro',
    severity: 'low',
    severityLabel: 'Leve',
    responded: true,
    notes: 'Escorregou ao sair do banho. Sem lesões.',
    vitals: { heartRate: 88, bloodPressure: '128/82' },
  },
  {
    id: 3,
    date: '18 de março de 2026',
    time: '19:45',
    location: 'Quarto',
    severity: 'low',
    severityLabel: 'Leve',
    responded: true,
    notes: 'Tropeçou no tapete. Assistência imediata prestada.',
    vitals: { heartRate: 82, bloodPressure: '122/80' },
  },
];

export function FallsHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      <PageHeader $topInset={insets.top}>
        <HeaderInner>
          <BackButton onPress={() => navigation.navigate('Dashboard')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Histórico de Quedas</PageTitle>
          <DateRow>
            <Calendar size={16} color="#fed7aa" />
            <DateText>Últimos 30 dias</DateText>
          </DateRow>
        </HeaderInner>
      </PageHeader>

      <Content>
        <StatsRow>
          <StatItem>
            <StatItemLabel>Total</StatItemLabel>
            <StatItemValue>3</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Este Mês</StatItemLabel>
            <StatItemValue $color="#ea580c">3</StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Média Mensal</StatItemLabel>
            <StatItemValue>2.5</StatItemValue>
          </StatItem>
        </StatsRow>

        <AlertCard>
          <AlertIconWrapper>
            <AlertTriangle size={16} color="white" />
          </AlertIconWrapper>
          <AlertContent>
            <AlertTitle>Recomendação de Segurança</AlertTitle>
            <AlertText>
              Foram detectadas 3 quedas no último mês. Recomenda-se avaliação médica e revisão das
              condições de segurança do ambiente.
            </AlertText>
          </AlertContent>
        </AlertCard>

        <SectionTitle>Todas as Ocorrências</SectionTitle>

        <IncidentsList>
          {fallIncidents.map((incident) => (
            <IncidentCard key={incident.id}>
              <IncidentHeader>
                <IncidentTitleRow>
                  <IncidentIconBox>
                    <AlertTriangle size={20} color="#dc2626" />
                  </IncidentIconBox>
                  <IncidentTitleBlock>
                    <IncidentTitle>Queda Detectada</IncidentTitle>
                    <IncidentDate>{incident.date}</IncidentDate>
                  </IncidentTitleBlock>
                </IncidentTitleRow>
                <SeverityBadge $severity={incident.severity}>
                  {incident.severityLabel}
                </SeverityBadge>
              </IncidentHeader>

              <IncidentMetaList>
                <IncidentMetaItem>
                  <Clock size={16} color="#6B7280" />
                  <IncidentMetaText>{incident.time}</IncidentMetaText>
                </IncidentMetaItem>
                <IncidentMetaItem>
                  <MapPin size={16} color="#6B7280" />
                  <IncidentMetaText>{incident.location}</IncidentMetaText>
                </IncidentMetaItem>
              </IncidentMetaList>

              <VitalsBox>
                <VitalsTitle>Sinais Vitais no Momento</VitalsTitle>
                <VitalsRow>
                  <VitalItem>
                    <VitalLabel>Batimentos</VitalLabel>
                    <VitalValue>{incident.vitals.heartRate} bpm</VitalValue>
                  </VitalItem>
                  <VitalItem $isLast>
                    <VitalLabel>Pressão</VitalLabel>
                    <VitalValue>{incident.vitals.bloodPressure} mmHg</VitalValue>
                  </VitalItem>
                </VitalsRow>
              </VitalsBox>

              <NotesSection>
                <NotesLabel>Observações:</NotesLabel>
                <NotesText>{incident.notes}</NotesText>
              </NotesSection>

              {incident.responded ? (
                <RespondedRow>
                  <RespondedDot />
                  <RespondedText>Atendido</RespondedText>
                </RespondedRow>
              ) : null}
            </IncidentCard>
          ))}
        </IncidentsList>

        <TipsCard>
          <TipsTitle>Dicas de Prevenção</TipsTitle>
          {[
            'Remova tapetes soltos e obstáculos dos caminhos',
            'Instale barras de apoio no banheiro',
            'Mantenha boa iluminação em todos os ambientes',
            'Use calçados antiderrapantes',
            'Consulte um médico sobre medicamentos que causam tontura',
          ].map((tip, i) => (
            <TipItem key={i}>
              <TipBullet>•</TipBullet>
              <TipText>{tip}</TipText>
            </TipItem>
          ))}
        </TipsCard>
      </Content>

      <Navigation />
    </Screen>
  );
}
