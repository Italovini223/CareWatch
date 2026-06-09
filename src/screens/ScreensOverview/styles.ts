import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f172a, #1e1b4b, #0f172a);
`;

export const PageHeader = styled.View`
  padding: 48px 20px 32px;
`;

export const HeaderInner = styled.View`
  max-width: 448px;
  margin: 0 auto;
  width: 100%;
`;

export const LogoRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const LogoIconBox = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoInfo = styled.View``;

export const AppTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES['2xl']}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
`;

export const AppSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: #a5b4fc;
  display: block;
`;

export const InfoBanner = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`;

export const InfoBannerIcon = styled.View`
  flex-shrink: 0;
  margin-top: 2px;
`;

export const InfoBannerBody = styled.View`
  flex: 1;
`;

export const InfoBannerTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
  margin-bottom: 4px;
`;

export const InfoBannerText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #c7d2fe;
  line-height: 1.625;
  display: block;
`;

export const Content = styled.View`
  padding: 0 20px 48px;
  max-width: 448px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const GroupSection = styled.View``;

export const GroupDivider = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const DividerLine = styled.View`
  height: 1px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const GroupLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: #a5b4fc;
  text-transform: uppercase;
  letter-spacing: 1.6px;
`;

export const ScreensList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ScreenButton = styled.TouchableOpacity`
  width: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
`;

export const ScreenCard = styled.View`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ScreenIconBox = styled.View<{ $gradientFrom: string; $gradientTo: string }>`
  background: linear-gradient(to bottom right, ${({ $gradientFrom }) => $gradientFrom}, ${({ $gradientTo }) => $gradientTo});
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScreenInfo = styled.View`
  flex: 1;
  min-width: 0;
`;

export const ScreenNameRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ScreenName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ScreenTag = styled.Text<{ $accentBg: string; $accentText: string }>`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  background-color: ${({ $accentBg }) => $accentBg};
  color: ${({ $accentText }) => $accentText};
`;

export const ScreenDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #a5b4fc;
  display: block;
  margin-top: 4px;
  line-height: 1.625;
`;

export const ScreenPath = styled.Text`
  font-family: monospace;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #818cf8;
  opacity: 0.6;
  display: block;
  margin-top: 4px;
`;

export const ChevronWrapper = styled.View`
  flex-shrink: 0;
`;

export const CredentialsBox = styled.View`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
`;

export const CredentialsTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: block;
  margin-bottom: 12px;
`;

export const CredentialsList = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CredentialRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CredentialKey = styled.Text`
  font-family: monospace;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: #a5b4fc;
`;

export const CredentialValue = styled.Text`
  font-family: monospace;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
