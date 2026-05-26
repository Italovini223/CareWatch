import styled, { css } from 'styled-components/native';

export const NavBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  padding: 8px 16px;
  z-index: 50;
`;

export const NavInner = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 448px;
  align-self: center;
`;

export const NavButton = styled.TouchableOpacity<{ $active: boolean }>`
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  background-color: transparent;

  ${({ $active, theme }) =>
    $active
      ? css`
          color: ${theme.COLORS.BLUE[600]};
        `
      : css`
          color: ${theme.COLORS.GRAY[600]};
        `}
`;

export const NavLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
`;
