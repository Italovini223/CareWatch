import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  padding-bottom: 5rem;
`;

export const PageHeader = styled.View`
  background: linear-gradient(to right, #ea580c, #dc2626);
  padding: 1.5rem;
`;

export const HeaderInner = styled.View`
  max-width: 28rem;
  margin: 0 auto;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1rem;
  background: transparent;
  border: none;
`;

export const BackButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
`;

export const PageTitle = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
  margin-bottom: 0.5rem;
`;

export const DateRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: #fed7aa;
`;

export const Content = styled.View`
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StatsGrid = styled.View`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const StatItem = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatItemLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const StatItemValue = styled.Text<{ $color?: string }>`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
  display: block;
  margin-top: 0.25rem;
`;

export const AlertCard = styled.View`
  background-color: #fff7ed;
  border: 1px solid #fdba74;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const AlertIconWrapper = styled.View`
  background-color: #ea580c;
  padding: 0.5rem;
  border-radius: 9999px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertContent = styled.View``;

export const AlertTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: #7c2d12;
  display: block;
  margin-bottom: 0.25rem;
`;

export const AlertText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: #9a3412;
  display: block;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const IncidentsList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IncidentCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
`;

export const IncidentHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const IncidentTitleRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const IncidentIconBox = styled.View`
  background-color: #fee2e2;
  padding: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncidentTitleBlock = styled.View``;

export const IncidentTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const IncidentDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const SeverityBadge = styled.Text<{ $severity: string }>`
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};

  ${({ $severity }) =>
    $severity === 'low' &&
    css`
      background-color: #fef9c3;
      color: #854d0e;
    `}
  ${({ $severity }) =>
    $severity === 'moderate' &&
    css`
      background-color: #ffedd5;
      color: #9a3412;
    `}
  ${({ $severity }) =>
    $severity === 'high' &&
    css`
      background-color: #fee2e2;
      color: #991b1b;
    `}
`;

export const IncidentMetaList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const IncidentMetaItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const IncidentMetaText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const VitalsBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  padding: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const VitalsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
  margin-bottom: 0.5rem;
`;

export const VitalsRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const VitalItem = styled.View``;

export const VitalLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  display: block;
`;

export const VitalValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const NotesSection = styled.View`
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};
  padding-top: 0.75rem;
`;

export const NotesLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
  margin-bottom: 0.25rem;
`;

export const NotesText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  display: block;
`;

export const RespondedRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const RespondedDot = styled.View`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN[500]};
`;

export const RespondedText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GREEN[700]};
`;

export const TipsCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
`;

export const TipsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
  margin-bottom: 0.75rem;
`;

export const TipsList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TipItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TipBullet = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
  margin-top: 0.0625rem;
  flex-shrink: 0;
`;

export const TipText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  flex: 1;
`;
