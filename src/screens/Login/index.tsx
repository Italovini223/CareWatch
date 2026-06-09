import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Heart, Eye, EyeOff, LayoutGrid } from 'lucide-react-native';
import { toast } from '../../utils/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { UserNavigatorRoutesProps } from '../../navigation/user.routes';
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

import { Button } from '../../components/Button';

export function Login() {
  const navigation = useNavigation<UserNavigatorRoutesProps>();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    const usersRaw = await AsyncStorage.getItem('users');
    const users = JSON.parse(usersRaw || '[]');
    const user = users.find(
      (u: any) => u.email === formData.email && u.password === formData.password
    );
    if (user) {
      await AsyncStorage.setItem('isAuthenticated', 'true');
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      toast.success('Login realizado com sucesso!');
      //navigation.navigate('MainTabs', { screen: '' });
    } else {
      toast.error('Email ou senha incorretos');
    }
  };

  const handleDemoLogin = async () => {
    const demoUser = {
      email: 'demo@carewatch.com',
      password: 'demo123',
      braceletSerial: 'CW01-2024-A1B2',
      name: 'Maria Silva',
      createdAt: new Date().toISOString(),
    };
    const usersRaw = await AsyncStorage.getItem('users');
    const users = JSON.parse(usersRaw || '[]');
    if (!users.find((u: any) => u.email === demoUser.email)) {
      users.push(demoUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }
    await AsyncStorage.setItem('isAuthenticated', 'true');
    await AsyncStorage.setItem('currentUser', JSON.stringify(demoUser));
    toast.success('Entrando como usuário demo!');
    //navigation.navigate('MainTabs', { screen: 'Dashboard' });
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
              keyboardType='email-address'
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
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
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

          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Entrar</SubmitButtonText>
          </SubmitButton>
        </Form>

  

        <Footer>
          <FooterText>
            Não tem uma conta?{' '}
          </FooterText>
          <FooterLink onPress={() => navigation.navigate('Register')}>
            <FooterLinkText>Cadastre-se</FooterLinkText>
          </FooterLink>
        </Footer>


      </CardBox>
    </Container>
  );
}
