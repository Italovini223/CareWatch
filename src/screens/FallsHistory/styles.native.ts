import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
`;

export const Screen = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 80,
  },
})`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
`;

export const PageHeader = styled(LinearGradient).attrs(() => ({
  colors: ['#ea580c', '#dc2626'],
}))<{ $topInset?: number }>`
  padding-top: ${({ $topInset = 0 }) => 24 + $topInset}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 28px;
`;

export const HeaderInner = styled.View`
  width: 100%;
  max-width: 448px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const BackButtonText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
`;

export const PageTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 8px;
`;

export const DateRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #fed7aa;
`;

export const Content = styled.View`
  width: 100%;
  max-width: 448px;
  align-self: center;
  padding: 24px 16px 0;
`;

export const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const StatItem = styled.View<{ $isLast?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 12px;
  align-items: center;
  margin-right: ${({ $isLast }) => ($isLast ? 0 : 12)}px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

export const StatItemLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const StatItemValue = styled.Text<{ $color?: string }>`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
`;

export const AlertCard = styled.View`
  background-color: #fff7ed;
  border-width: 1px;
  border-color: #fdba74;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 16px;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const AlertIconWrapper = styled.View`
  background-color: #ea580c;
  padding: 8px;
  border-radius: 999px;
  margin-right: 12px;
`;

export const AlertContent = styled.View`
  flex: 1;
`;

export const AlertTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #7c2d12;
  margin-bottom: 4px;
`;

export const AlertText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #9a3412;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  margin-bottom: 0;
`;

export const IncidentsList = styled.View``;

export const IncidentCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

export const IncidentHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const IncidentTitleRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IncidentIconBox = styled.View`
  background-color: #fee2e2;
  padding: 12px;
  border-radius: 999px;
  margin-right: 12px;
`;

export const IncidentTitleBlock = styled.View``;

export const IncidentTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const IncidentDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const SeverityBadge = styled.Text<{ $severity: string }>`
  border-radius: 999px;
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
  margin-bottom: 12px;
`;

export const IncidentMetaItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const IncidentMetaText = styled.Text`
  margin-left: 8px;
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
  margin-bottom: 8px;
`;

export const VitalsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const VitalItem = styled.View<{ $isLast?: boolean }>`
  flex: 1;
  margin-right: ${({ $isLast }) => ($isLast ? 0 : 8)}px;
`;

export const VitalLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const VitalValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  margin-top: 4px;
`;

export const NotesSection = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  padding-top: 12px;
`;

export const NotesLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  margin-bottom: 4px;
`;

export const NotesText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;

export const RespondedRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const RespondedDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: #22c55e;
  margin-right: 8px;
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
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 16px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

export const TipsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  margin-bottom: 8px;
`;

export const TipItem = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
`;

export const TipBullet = styled.Text`
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
`;

export const TipText = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
`;
