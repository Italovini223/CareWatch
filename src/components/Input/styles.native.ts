import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;
