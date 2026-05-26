import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Heart, Eye, EyeOff, Watch, LayoutGrid, User, Calendar } from 'lucide-react-native';
import { toast } from '../../utils/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  Section,
  SectionDivider,
  DividerLine,
  SectionLabel,
  FieldGroup,
  FormGroup,
  PasswordWrapper,
  PasswordInput,
  SerialInput,
  InputWrapper,
  InputIcon,
  PasswordToggle,
  HintText,
  AgeBadgeRow,
  AgeDot,
  AgeText,
  SubmitButton,
  SubmitButtonText,
  Footer,
  FooterText,
  FooterLink,
  FooterLinkText,
  Divider,
  SerialHintBox,
  SerialHintTitle,
  SerialHintValue,
  PrototypeLink,
  PrototypeLinkText,
} from './styles';

function calcularIdade(dataNascimento: string): number | null {
  if (!dataNascimento) return null;
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

export function Register() {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    braceletSerial: '',
    elderName: '',
    birthDate: '',
  });

  const idade = calcularIdade(formData.birthDate);

  const handleSubmit = async () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.braceletSerial ||
      !formData.elderName ||
      !formData.birthDate
    ) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    if (!formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }
    if (formData.elderName.trim().length < 3) {
      toast.error('Informe o nome completo do usuário da pulseira');
      return;
    }
    const idadeCalc = calcularIdade(formData.birthDate);
    if (idadeCalc === null || idadeCalc < 0 || idadeCalc > 130) {
      toast.error('Data de nascimento inválida');
      return;
    }
    const serialPattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!serialPattern.test(formData.braceletSerial.toUpperCase())) {
      toast.error('Serial da pulseira inválido. Formato: XXXX-XXXX-XXXX');
      return;
    }
    const usersRaw = await AsyncStorage.getItem('users');
    const users = JSON.parse(usersRaw || '[]');
    if (users.some((u: any) => u.email === formData.email)) {
      toast.error('Este email já está cadastrado');
      return;
    }
    if (users.some((u: any) => u.braceletSerial === formData.braceletSerial.toUpperCase())) {
      toast.error('Este serial de pulseira já está cadastrado');
      return;
    }
    const newUser = {
      email: formData.email,
      password: formData.password,
      braceletSerial: formData.braceletSerial.toUpperCase(),
      elderName: formData.elderName.trim(),
      birthDate: formData.birthDate,
      age: idadeCalc,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));
    toast.success('Conta criada com sucesso!');
    await AsyncStorage.setItem('isAuthenticated', 'true');
    await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));
    navigation.navigate('MainTabs', { screen: 'Dashboard' });
  };

  const handleSerialChange = (text: string) => {
    let value = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length > 4) value = value.slice(0, 4) + '-' + value.slice(4);
    if (value.length > 9) value = value.slice(0, 9) + '-' + value.slice(9);
    if (value.length > 14) value = value.slice(0, 14);
    setFormData({ ...formData, braceletSerial: value });
  };

  const hoje = new Date().toISOString().split('T')[0];

  return (
    <Container>
      <CardBox>
        <Header>
          <LogoCircle>
            <Heart size={32} color="#2563EB" />
          </LogoCircle>
          <Title>Criar Conta</Title>
          <Subtitle>Cadastre-se para começar o monitoramento</Subtitle>
        </Header>

        <Form>
          <Section>
            <SectionDivider>
              <DividerLine />
              <SectionLabel>Dados da Conta</SectionLabel>
              <DividerLine />
            </SectionDivider>
            <FieldGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  keyboardType="email-address"
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
                    placeholder="Mínimo 6 caracteres"
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

              <FormGroup>
                <Label>Confirmar Senha</Label>
                <PasswordWrapper>
                  <PasswordInput
                    secureTextEntry={!showConfirmPassword}
                    placeholder="Digite a senha novamente"
                    value={formData.confirmPassword}
                    onChangeText={(text) =>
                      setFormData({ ...formData, confirmPassword: text })
                    }
                  />
                  <PasswordToggle onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? (
                      <EyeOff size={20} color="#6B7280" />
                    ) : (
                      <Eye size={20} color="#6B7280" />
                    )}
                  </PasswordToggle>
                </PasswordWrapper>
              </FormGroup>
            </FieldGroup>
          </Section>

          <Section>
            <SectionDivider>
              <DividerLine />
              <SectionLabel>Dados do Usuário da Pulseira</SectionLabel>
              <DividerLine />
            </SectionDivider>
            <FieldGroup>
              <FormGroup>
                <Label>Nome completo</Label>
                <InputWrapper>
                  <Input
                    placeholder="Ex: Maria Aparecida Silva"
                    value={formData.elderName}
                    onChangeText={(text) => setFormData({ ...formData, elderName: text })}
                    style={{ paddingRight: 2.5 }}
                  />
                  <InputIcon>
                    <User size={20} color="#9CA3AF" />
                  </InputIcon>
                </InputWrapper>
                <HintText>Nome do idoso que usará a pulseira</HintText>
              </FormGroup>

              <FormGroup>
                <Label>Data de nascimento</Label>
                <InputWrapper>
                  <Input
                    keyboardType="numbers-and-punctuation"
                    value={formData.birthDate}
                    onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
                    style={{ paddingRight: 2.5 }}
                  />
                  <InputIcon>
                    <Calendar size={20} color="#9CA3AF" />
                  </InputIcon>
                </InputWrapper>
                {idade !== null && idade >= 0 && (
                  <AgeBadgeRow>
                    <AgeDot />
                    <AgeText>
                      {idade} {idade === 1 ? 'ano' : 'anos'} de idade
                    </AgeText>
                  </AgeBadgeRow>
                )}
              </FormGroup>
            </FieldGroup>
          </Section>

          <Section>
            <SectionDivider>
              <DividerLine />
              <SectionLabel>Dados da Pulseira</SectionLabel>
              <DividerLine />
            </SectionDivider>
            <FormGroup>
              <Label>Serial da Pulseira</Label>
              <InputWrapper>
                <SerialInput
                  placeholder="XXXX-XXXX-XXXX"
                  value={formData.braceletSerial}
                  onChangeText={handleSerialChange}
                  maxLength={14}
                />
                <InputIcon>
                  <Watch size={20} color="#9CA3AF" />
                </InputIcon>
              </InputWrapper>
              <HintText>O serial está localizado na parte traseira da pulseira</HintText>
            </FormGroup>
          </Section>

          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Criar Conta</SubmitButtonText>
          </SubmitButton>
        </Form>

        <Footer>
          <FooterText>Já tem uma conta? </FooterText>
          <FooterLink onPress={() => navigation.navigate('Login')}>
            <FooterLinkText>Faça login</FooterLinkText>
          </FooterLink>
        </Footer>

        <Divider>
          <SerialHintBox>
            <SerialHintTitle>Serial de exemplo para testes:</SerialHintTitle>
            <SerialHintValue>CW01-2024-A1B2</SerialHintValue>
          </SerialHintBox>
          <PrototypeLink onPress={() => navigation.navigate('ScreensOverview')}>
            <LayoutGrid size={16} color="#6B7280" />
            <PrototypeLinkText>Ver todas as telas do protótipo</PrototypeLinkText>
          </PrototypeLink>
        </Divider>
      </CardBox>
    </Container>
  );
}
