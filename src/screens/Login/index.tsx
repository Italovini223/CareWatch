import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Heart, Eye, EyeOff } from 'lucide-react-native';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { ref, get } from 'firebase/database';
import * as Crypto from 'expo-crypto';
import { auth, rtdb } from '../../lib/firebase';
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
      // 1. Autentica no Firebase Auth
      const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // 2. Verifica se o perfil existe no Realtime Database
      const userSnap = await get(ref(rtdb, `users/${user.uid}`));
      if (!userSnap.exists()) {
        await signOut(auth);
        toast.error('Usuário não encontrado no sistema');
        return;
      }

      // 3. Confere o hash da senha contra o valor salvo no RTDB
      const userData = userSnap.val() as { passwordHash: string };
      const inputHash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        formData.password
      );
      if (inputHash !== userData.passwordHash) {
        await signOut(auth);
        toast.error('Email ou senha incorretos');
        return;
      }

      toast.success('Login realizado com sucesso!');
      // onAuthStateChanged em Routes cuida do redirecionamento
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
