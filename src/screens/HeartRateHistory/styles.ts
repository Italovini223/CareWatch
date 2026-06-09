import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  padding-bottom: 80px;
`;

export const PageHeader = styled.View`
  background: linear-gradient(to right, #dc2626, #db2777);
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

export const PageTitle = styled.Text`
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
  color: #fce7f3;
`;

export const Content = styled.View`
  max-width: 448px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ChartCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 16px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
  margin-bottom: 16px;
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

export const ReadingsList = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 16px;
`;

export const ReadingItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};

  &:last-child {
    border-bottom: none;
  }
`;

export const ReadingInfo = styled.View``;

export const ReadingValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const ReadingTime = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const ReadingActivity = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  display: block;
  margin-top: 4px;
`;

export const StatusBadge = styled.Text<{ $status: string }>`
  border-radius: 9999px;
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};

  ${({ $status }) =>
    $status === 'normal' &&
    css`
      background-color: #dcfce7;
      color: #166534;
    `}
  ${({ $status }) =>
    $status === 'warning' &&
    css`
      background-color: #fef9c3;
      color: #854d0e;
    `}
  ${({ $status }) =>
    $status === 'danger' &&
    css`
      background-color: #fee2e2;
      color: #991b1b;
    `}
`;

export const RefCard = styled.View`
  background-color: #fff1f2;
  border: 1px solid #fecdd3;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 16px;
`;

export const RefTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #7f1d1d;
  display: block;
  margin-bottom: 8px;
`;

export const RefList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RefItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RefDot = styled.View<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const RefText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #991b1b;
`;

export const ZonesCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 16px;
`;

export const ZoneItem = styled.View`
  & + & {
    margin-top: 12px;
  }
`;

export const ZoneRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const ZoneLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const ZonePercent = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const ProgressTrack = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  border-radius: 9999px;
  height: 8px;
`;

export const ProgressBar = styled.View<{ $width: string; $color: string }>`
  height: 8px;
  border-radius: 9999px;
  width: ${({ $width }) => $width};
  background-color: ${({ $color }) => $color};
`;
