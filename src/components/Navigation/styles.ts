import styled, { css } from 'styled-components/native';

export const NAV_HEIGHT = 64;

export const NavBar = styled.View<{ $bottomInset?: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: ${({ $bottomInset = 0 }) => 8 + $bottomInset}px;
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
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
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
  margin-top: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
`;
