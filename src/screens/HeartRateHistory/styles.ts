import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  padding-bottom: 5rem;
`;

export const PageHeader = styled.View`
  background: linear-gradient(to right, #dc2626, #db2777);
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

export const PageTitle = styled.Text`
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
  color: #fce7f3;
`;

export const Content = styled.View`
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChartCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
  margin-bottom: 1rem;
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

export const ReadingsList = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
`;

export const ReadingItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const ReadingActivity = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  display: block;
  margin-top: 0.25rem;
`;

export const StatusBadge = styled.Text<{ $status: string }>`
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
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
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  padding: 1rem;
`;

export const RefTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: #7f1d1d;
  display: block;
  margin-bottom: 0.5rem;
`;

export const RefList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RefItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const RefDot = styled.View<{ $color: string }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const RefText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: #991b1b;
`;

export const ZonesCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
`;

export const ZoneItem = styled.View`
  & + & {
    margin-top: 0.75rem;
  }
`;

export const ZoneRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

export const ZoneLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const ZonePercent = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const ProgressTrack = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  border-radius: 9999px;
  height: 0.5rem;
`;

export const ProgressBar = styled.View<{ $width: string; $color: string }>`
  height: 0.5rem;
  border-radius: 9999px;
  width: ${({ $width }) => $width};
  background-color: ${({ $color }) => $color};
`;
