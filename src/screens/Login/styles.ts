import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.BLUE[600], theme.COLORS.BLUE[700], theme.COLORS.PURPLE[800]],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const CardBox = styled.View`
  width: 100%;
  max-width: 448px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 32px;
  shadow-color: #000000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.2;
  shadow-radius: 16px;
  elevation: 6;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;

export const LogoCircle = styled.View`
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.COLORS.BLUE[100]};
  border-radius: 9999px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES['3xl']};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const Form = styled.View`
  flex-direction: column;
`;

export const FormGroup = styled.View`
  flex-direction: column;
  margin-bottom: 16px;
`;

export const PasswordWrapper = styled.View`
  position: relative;
`;

export const PasswordToggle = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -12px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const PasswordInput = styled.TextInput`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 8px 40px 8px 12px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
  margin-top: 8px;
`;

export const SubmitButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.WHITE};
  line-height: 1.5;
`;

export const DemoButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 2px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.COLORS.BLUE[200]};
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  background-color: transparent;
`;

export const DemoButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
`;

export const Footer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  margin-right: 4px;
`;

export const FooterLink = styled.TouchableOpacity`
  background-color: transparent;
`;

export const FooterLinkText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
`;

export const Divider = styled.View`
  margin-top: 24px;
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const PrototypeLink = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: transparent;
`;

export const PrototypeLinkText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  margin-left: 8px;
`;
