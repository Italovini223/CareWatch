import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Heart, Eye, EyeOff } from 'lucide-react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../lib/firebase';
import { toast } from '../../utils/toast';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import {
  Container,
  CardBox,
  Header,
  LogoCircle,
  Title,
  Subtitle,
  Form,
  FormGroup,
  PasswordWrapper,
  PasswordToggle,
  PasswordInput,
  SubmitButton,
  SubmitButtonText,
  Footer,
  FooterText,
  FooterLink,
  FooterLinkText,
} from './styles';

export function Login() {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (
          error.code === 'auth/invalid-credential' ||
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          toast.error('Email ou senha incorretos');
        } else if (error.code === 'auth/network-request-failed') {
          toast.error('Erro de conexão. Verifique sua internet');
        } else {
          toast.error('Erro ao fazer login. Tente novamente');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CardBox>
        <Header>
          <LogoCircle>
            <Heart size={32} color="#2563EB" />
          </LogoCircle>
          <Title>CareWatch</Title>
          <Subtitle>Monitoramento inteligente de idosos</Subtitle>
        </Header>

        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="seu@email.com"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </FormGroup>

          <FormGroup>
            <Label>Senha</Label>
            <PasswordWrapper>
              <PasswordInput
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
              />
              <PasswordToggle onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#6B7280" />
                ) : (
                  <Eye size={20} color="#6B7280" />
                )}
              </PasswordToggle>
            </PasswordWrapper>
          </FormGroup>

          <SubmitButton onPress={handleLogin} disabled={isLoading}>
            <SubmitButtonText>{isLoading ? 'Entrando...' : 'Entrar'}</SubmitButtonText>
          </SubmitButton>
        </Form>

        <Footer>
          <FooterText>Não tem uma conta? </FooterText>
          <FooterLink onPress={() => navigation.navigate('Register')}>
            <FooterLinkText>Cadastre-se</FooterLinkText>
          </FooterLink>
        </Footer>
      </CardBox>
    </Container>
  );
}
