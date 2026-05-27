import styled, { css } from 'styled-components/native';

type Status = 'normal' | 'warning' | 'danger';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 16px;

`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View<{ $status: Status }>`
  padding: 12px;
  border-radius: 999px;
  margin-right: 12px;

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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const ValueRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-top: 4px;
`;

export const StatValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const StatUnit = styled.Text`
  margin-left: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
`;
