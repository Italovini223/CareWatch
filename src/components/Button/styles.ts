import styled, { css } from 'styled-components/native';


type ButtonVariant = 'primary' | 'outline' | 'ghost';

type ButtonProps = {
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  border: 1px solid transparent;
  line-height: 1.5;
  gap: 0.5rem;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ variant, theme }) =>
    (!variant || variant === 'primary') &&
    css`
      background-color: ${theme.COLORS.BLUE[600]};
      color: ${theme.COLORS.WHITE};
      border-color: ${theme.COLORS.BLUE[600]};
      &:hover {
        background-color: ${theme.COLORS.BLUE[700]};
        border-color: ${theme.COLORS.BLUE[700]};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.COLORS.RED[600]};
      border-color: ${theme.COLORS.RED[200]};
      &:hover {
        background-color: ${theme.COLORS.RED[50]};
        color: ${theme.COLORS.RED[700]};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'ghost' &&
    css`
      background-color: transparent;
      color: ${theme.COLORS.GRAY[600]};
      border-color: transparent;
      &:hover {
        background-color: ${theme.COLORS.GRAY[100]};
      }
    `}
`;
