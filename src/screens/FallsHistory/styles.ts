import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  padding-bottom: 80px;
`;

export const PageHeader = styled.View`
  background: linear-gradient(to right, #ea580c, #dc2626);
  padding: 24px;
`;

export const HeaderInner = styled.View`
  max-width: 448px;
  margin: 0 auto;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 16px;
  background: transparent;
  border: none;
`;

export const BackButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
`;

export const PageTitle = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
  margin-bottom: 8px;
`;

export const DateRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #fed7aa;
`;

export const Content = styled.View`
  max-width: 448px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StatsGrid = styled.View`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const StatItem = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatItemLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const StatItemValue = styled.Text<{ $color?: string }>`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
  display: block;
  margin-top: 4px;
`;

export const AlertCard = styled.View`
  background-color: #fff7ed;
  border: 1px solid #fdba74;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`;

export const AlertIconWrapper = styled.View`
  background-color: #ea580c;
  padding: 8px;
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #7c2d12;
  display: block;
  margin-bottom: 4px;
`;

export const AlertText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #9a3412;
  display: block;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const IncidentsList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IncidentCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 16px;
`;

export const IncidentHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const IncidentTitleRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const IncidentIconBox = styled.View`
  background-color: #fee2e2;
  padding: 12px;
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const SeverityBadge = styled.Text<{ $severity: string }>`
  border-radius: 9999px;
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
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
  gap: 8px;
  margin-bottom: 12px;
`;

export const IncidentMetaItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const IncidentMetaText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const VitalsBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  padding: 12px;
  margin-bottom: 12px;
`;

export const VitalsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
  margin-bottom: 8px;
`;

export const VitalsRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const VitalItem = styled.View``;

export const VitalLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  display: block;
`;

export const VitalValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const NotesSection = styled.View`
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};
  padding-top: 12px;
`;

export const NotesLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
  margin-bottom: 4px;
`;

export const NotesText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  display: block;
`;

export const RespondedRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

export const RespondedDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN[500]};
`;

export const RespondedText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GREEN[700]};
`;

export const TipsCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 16px;
`;

export const TipsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
  margin-bottom: 12px;
`;

export const TipsList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TipItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const TipBullet = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
  margin-top: 1px;
  flex-shrink: 0;
`;

export const TipText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  flex: 1;
`;
