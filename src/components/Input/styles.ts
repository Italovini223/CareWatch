import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  line-height: 1.5;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY[400]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.BLUE[600]};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.BLUE[100]};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
