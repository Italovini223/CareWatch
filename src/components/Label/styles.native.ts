import styled from 'styled-components/native';

export const StyledLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.GRAY[700]};
  line-height: 20px;
`;
