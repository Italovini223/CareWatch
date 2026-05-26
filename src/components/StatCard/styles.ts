import styled, { css } from 'styled-components/native';

type Status = 'normal' | 'warning' | 'danger';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.SHADOWS.lg};
  }
`;

export const Row = styled.View`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconWrapper = styled.View<{ $status: Status }>`
  padding: 0.75rem;
  border-radius: 9999px;

  ${({ $status, theme }) =>
    $status === 'normal' &&
    css`
      background-color: ${theme.STATUS.normal.background};
      color: ${theme.STATUS.normal.icon};
    `}

  ${({ $status, theme }) =>
    $status === 'warning' &&
    css`
      background-color: ${theme.STATUS.warning.background};
      color: ${theme.STATUS.warning.icon};
    `}

  ${({ $status, theme }) =>
    $status === 'danger' &&
    css`
      background-color: ${theme.STATUS.danger.background};
      color: ${theme.STATUS.danger.icon};
    `}
`;

export const Info = styled.View`
  flex: 1;
`;

export const StatLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  margin: 0;
`;

export const ValueRow = styled.View`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

export const StatValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const StatUnit = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
`;
