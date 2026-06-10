import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.BLUE[600], theme.COLORS.BLUE[700], theme.COLORS.PURPLE[800]],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
`;

export const CardBox = styled.View`
  width: 100%;
  max-width: 448px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg}px;
  padding: 32px;
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
  font-size: ${({ theme }) => theme.FONT_SIZES['3xl']}px;
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

export const Section = styled.View`
  display: flex;
  flex-direction: column;
`;

export const SectionDivider = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const DividerLine = styled.View`
  height: 1px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;


export const SectionLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.GRAY[400]};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-left: 8px;
`;

export const FieldGroup = styled.View`
  flex-direction: column;
  margin-bottom: 16px;
`;

export const FormGroup = styled.View`
  flex-direction: column;
  margin-bottom: 12px;
`;

export const PasswordWrapper = styled.View`
  position: relative;
`;

export const PasswordInput = styled.TextInput<{ $isInvalid?: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 1px;
  border-color: ${({ $isInvalid, theme }) =>
    $isInvalid ? theme.COLORS.RED[600] : theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 8px 40px 8px 12px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const SerialInput = styled.TextInput<{ $isInvalid?: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 1px;
  border-color: ${({ $isInvalid, theme }) =>
    $isInvalid ? theme.COLORS.RED[600] : theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 8px 40px 8px 12px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: monospace;
  letter-spacing: 1.6px;
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const FieldError = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED[600]};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  margin-top: 4px;
`;

export const InputWrapper = styled.View`
  position: relative;
`;

export const InputIcon = styled.View`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -12px;
  align-items: center;
`;

export const PasswordToggle = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -12px;
  padding: 4px;
  align-items: center;
  background-color: transparent;
`;

export const HintText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
`;

export const AgeBadgeRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const AgeDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
  margin-right: 6px;
`;

export const AgeText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.BLUE[700]};
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
`;

export const SubmitButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.WHITE};
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
`;

export const Divider = styled.View`
  margin-top: 24px;
  padding-top: 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const SerialHintBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE[50]};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  padding: 12px;
  margin-bottom: 16px;
`;

export const SerialHintTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  color: ${({ theme }) => theme.COLORS.BLUE[900]};
  margin-bottom: 4px;
`;

export const SerialHintValue = styled.Text`
  font-family: monospace;
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  color: ${({ theme }) => theme.COLORS.BLUE[700]};
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
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
  margin-left: 8px;
`;
