import styled, { css } from 'styled-components/native';
import { keyframes } from 'styled-components';
import { motion } from 'motion/react';

const pulseAnim = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
  backdrop-filter: blur(4px);
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.xl} ${({ theme }) => theme.BORDER_RADIUS.xl} 0 0;
  box-shadow: ${({ theme }) => theme.SHADOWS.alert};
  max-height: 85vh;
  overflow-y: auto;
`;

export const Handle = styled.View`
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.25rem;
  justify-content: center;
`;

export const HandleBar = styled.View`
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const DrawerContent = styled.View`
  padding: 0.75rem 1rem 1.5rem;
`;

export const DrawerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const DrawerTitleBlock = styled.View``;

export const DrawerTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
`;

export const DrawerSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  margin-top: 0.125rem;
  display: block;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const ProtoBadge = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background-color: #eef2ff;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
`;

export const PulseDot = styled.View`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #6366f1;
  animation: ${pulseAnim} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const ProtoBadgeText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: #4338ca;
`;

export const ScreenList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ScreenItem = styled.TouchableOpacity<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;

  ${({ $active }) =>
    $active
      ? css`
          background-color: #eef2ff;
          box-shadow: 0 0 0 2px #a5b4fc;
        `
      : css`
          background-color: #f9fafb;
        `}
`;

export const ScreenIconWrapper = styled.View<{ $lightColor: string }>`
  padding: 0.625rem;
  border-radius: 0.75rem;
  background-color: ${({ $lightColor }) => $lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ScreenInfo = styled.View`
  flex: 1;
  min-width: 0;
`;

export const ScreenName = styled.View<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ $active }) => ($active ? '#4338ca' : '#1f2937')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActiveChip = styled.View`
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  background-color: #c7d2fe;
  color: #4338ca;
  padding: 0.125rem 0.375rem;
  border-radius: 9999px;
`;

export const ScreenDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

export const ChevronIcon = styled.View`
  color: ${({ theme }) => theme.COLORS.GRAY[400]};
  flex-shrink: 0;
`;

export const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  z-index: 50;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background-color: #4f46e5;
  box-shadow: ${({ theme }) => theme.SHADOWS.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
