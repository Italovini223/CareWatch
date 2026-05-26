import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 100vh;
  background: ${({ theme }) => theme.COLORS.GRADIENTS.AUTH};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const CardBox = styled.View`
  width: 100%;
  max-width: 28rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.lg};
  box-shadow: ${({ theme }) => theme.SHADOWS.xl};
  padding: 2rem;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LogoCircle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE[100]};
  border-radius: 9999px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES['3xl']};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.bold};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  display: block;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
  display: block;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PasswordWrapper = styled.View`
  position: relative;
`;

export const PasswordToggle = styled.TouchableOpacity`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;

export const PasswordInput = styled.TextInput`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
  line-height: 1.5;
  outline: none;
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

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE[600]};
  cursor: pointer;
  margin-top: 0.5rem;
  border: none;
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
  padding: 0.625rem 1rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md};
  border: 2px dashed ${({ theme }) => theme.COLORS.BLUE[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 0.75rem;
  background: transparent;
`;

export const DemoButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.medium};
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
`;

export const Footer = styled.View`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.GRAY[600]};
`;

export const FooterLink = styled.TouchableOpacity`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
`;

export const FooterLinkText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE[600]};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.semibold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
`;

export const Divider = styled.View`
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY[200]};
`;

export const PrototypeLink = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const PrototypeLinkText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[500]};
`;
