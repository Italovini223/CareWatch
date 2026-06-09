import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Screen = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 80,
  },
})`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
`;

export const PageHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.BLUE[600], theme.COLORS.BLUE[800]],
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
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']}px;
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
  color: rgba(219, 234, 254, 1);
`;

export const Content = styled.View`
  width: 100%;
  max-width: 448px;
  align-self: center;
  padding: 24px 16px 0;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  margin-bottom: 12px;
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
`;

export const StatItemLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const StatItemValue = styled.Text<{ $color?: string }>`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
`;

export const ReadingsList = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;

`;

export const ReadingItem = styled.View<{ $isLast?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${({ $isLast }) => ($isLast ? 0 : 1)}px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const ReadingInfo = styled.View``;

export const ReadingValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const ReadingTime = styled.Text`
  margin-top: 2px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const StatusBadge = styled.Text<{ $status: string }>`
  border-radius: 999px;
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};

  ${({ $status }) =>
    $status === 'normal' &&
    `
      background-color: #dcfce7;
      color: #166534;
    `}
  ${({ $status }) =>
    $status === 'warning' &&
    `
      background-color: #fef9c3;
      color: #854d0e;
    `}
  ${({ $status }) =>
    $status === 'danger' &&
    `
      background-color: #fee2e2;
      color: #991b1b;
    `}
`;

export const RefCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[50]};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE[200]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 16px;
`;

export const RefTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.BLUE[900]};
  margin-bottom: 8px;
`;

export const RefItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const RefDot = styled.View<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background-color: ${({ $color }) => $color};
  margin-right: 8px;
`;

export const RefText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.BLUE[700]};
`;
