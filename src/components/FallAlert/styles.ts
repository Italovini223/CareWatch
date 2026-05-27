import styled from 'styled-components/native';
import { motion } from 'motion/react';

export const AlertWrapper = styled(motion.view)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 28rem;
  margin: 0 auto;
`;

export const AlertBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED[600]};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  box-shadow: ${({ theme }) => theme.SHADOWS.alert};
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const AlertIconWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WITH_OPACITY.WHITE_20};
  padding: 0.5rem;
  border-radius: 9999px;
  flex-shrink: 0;
`;

export const AlertContent = styled.View`
  flex: 1;
`;

export const AlertTitle = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 0 0 0.25rem;
`;

export const AlertMessage = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin: 0 0 0.5rem;
`;

export const AlertHint = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  opacity: 0.9;
  margin: 0;
`;

export const DismissButton = styled.TouchableOpacity`
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.WHITE};
  transition: background-color 0.2s;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.WITH_OPACITY.WHITE_20};
  }
`;
