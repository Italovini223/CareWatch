import styled from 'styled-components/native';
import { keyframes } from 'styled-components';

const pulseAnim = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const Container = styled.View`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
  padding-bottom: 80px;
`;

export const PageHeader = styled.View`
  background: ${({ theme }) => theme.COLORS.GRADIENTS.PRIMARY};
  padding: 24px;
  padding-bottom: 32px;
`;

export const HeaderInner = styled.View`
  max-width: 448px;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const AvatarCircle = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WITH_OPACITY.WHITE_20};
  padding: 8px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserDetails = styled.View``;

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.xl}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
`;

export const UserAge = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: rgba(219, 234, 254, 1);
  display: block;
`;

export const ConnectedBadge = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN[500]};
  border-radius: 9999px;
  padding: 4px 10px;
`;

export const ConnectedText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PulseDot = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 9999px;
  animation: ${pulseAnim} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const LastUpdate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: rgba(219, 234, 254, 1);
  display: block;
`;

export const Content = styled.View`
  max-width: 448px;
  margin: 0 auto;
  padding: 0 16px;
  margin-top: -16px;
  width: 100%;
`;

export const StatsContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[50]};
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE[200]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 16px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`;

export const InfoIconWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
  padding: 8px;
  border-radius: 9999px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContent = styled.View``;

export const InfoTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.BLUE[900]};
  display: block;
  margin-bottom: 4px;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.BLUE[700]};
  display: block;
`;

export const QuickStats = styled.View`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const QuickStatCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: ${({ theme }) => theme.SHADOWS.sm};
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuickStatLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const QuickStatValue = styled.Text<{ $color?: string }>`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.xl}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
  display: block;
  margin-top: 4px;
`;

export const LogoutArea = styled.View`
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border: 1px solid ${({ theme }) => theme.COLORS.RED[200]};
  cursor: pointer;
  background: transparent;
`;

export const LogoutButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.RED[600]};
`;
