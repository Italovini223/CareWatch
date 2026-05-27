import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

export const Screen = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 80,
  },
})`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.GRAY[50]};
`;

export const PageHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.BLUE[600], theme.COLORS.BLUE[800]],
}))`
  padding: 24px 16px 32px;
`;

export const HeaderInner = styled.View`
  width: 100%;
  max-width: 448px;
  align-self: center;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarCircle = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WITH_OPACITY.WHITE_20};
  padding: 8px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const UserDetails = styled.View``;

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.xl};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const UserAge = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: rgba(219, 234, 254, 1);
`;

export const ConnectedBadge = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN[500]};
  border-radius: 999px;
  padding: 4px 10px;
`;

export const ConnectedText = styled.Text`
  margin-left: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PulseDot = styled(Animated.View)`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 999px;
`;

export const LastUpdate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: rgba(219, 234, 254, 1);
`;

export const Content = styled.View`
  width: 100%;
  max-width: 448px;
  align-self: center;
  padding: 0 16px;
  margin-top: -16px;
`;

export const StatsContainer = styled.View`
  margin-top: 8px;
  gap: 12px;
`;

export const InfoCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[50]};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE[200]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  padding: 16px;
  margin-top: 24px;
  flex-direction: row;
  align-items: flex-start;
`;

export const InfoIconWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
  padding: 8px;
  border-radius: 999px;
  margin-right: 12px;
`;

export const InfoContent = styled.View`
  flex: 1;
`;

export const InfoTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.BLUE[900]};
  margin-bottom: 4px;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.BLUE[700]};
`;

export const QuickStats = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuickStatCard = styled.View<{ $isLast?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 12px;
  align-items: center;
  margin-right: ${({ $isLast }) => ($isLast ? 0 : 12)}px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 2;
`;

export const QuickStatLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const QuickStatValue = styled.Text<{ $color?: string }>`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.xl};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ $color, theme }) => $color || theme.COLORS.GRAY[900]};
`;

export const LogoutArea = styled.View`
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.RED[200]};
  background-color: transparent;
`;

export const LogoutButtonText = styled.Text`
  margin-left: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.RED[600]};
`;
