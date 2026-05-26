import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart, Eye, EyeOff, LayoutGrid } from 'lucide-react';
import { toast } from 'sonner';
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
  DemoButton,
  DemoButtonText,
  Footer,
  FooterText,
  FooterLink,
  FooterLinkText,
  Divider,
  PrototypeLink,
  PrototypeLinkText,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.email === formData.email && u.password === formData.password
    );
    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      toast.success('Login realizado com sucesso!');
      navigate('/');
    } else {
      toast.error('Email ou senha incorretos');
    }
  };

  const handleDemoLogin = () => {
    const demoUser = {
      email: 'demo@carewatch.com',
      password: 'demo123',
      braceletSerial: 'CW01-2024-A1B2',
      name: 'Maria Silva',
      createdAt: new Date().toISOString(),
    };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (!users.find((u: any) => u.email === demoUser.email)) {
      users.push(demoUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(demoUser));
    toast.success('Entrando como usuário demo!');
    navigate('/');
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

        <DemoButton onPress={handleDemoLogin}>
          <DemoButtonText>Entrar como Demo (acesso rápido)</DemoButtonText>
        </DemoButton>

        <Footer>
          <FooterText>
            Não tem uma conta?{' '}
          </FooterText>
          <FooterLink onPress={() => navigate('/register')}>
            <FooterLinkText>Cadastre-se</FooterLinkText>
          </FooterLink>
        </Footer>

        <Divider>
          <PrototypeLink onPress={() => navigate('/screens')}>
            <LayoutGrid size={16} color="#6B7280" />
            <PrototypeLinkText>Ver todas as telas do protótipo</PrototypeLinkText>
          </PrototypeLink>
        </Divider>
      </CardBox>
    </Container>
  );
}
