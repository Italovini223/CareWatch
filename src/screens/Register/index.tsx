import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Heart, Eye, EyeOff, Watch, User, Calendar } from 'lucide-react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from '../../utils/toast';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { registerSchema, RegisterFormData } from './schema';
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
  FieldError,
} from './styles';

function calcularIdade(dataNascimento: string): number | null {
  if (!dataNascimento) return null;
  const nascimento = new Date(dataNascimento);
  if (isNaN(nascimento.getTime())) return null;
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;
  return idade;
}

export function Register() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const birthDate = watch('birthDate');
  const idade = calcularIdade(birthDate || '');

  const onSubmit = async (data: RegisterFormData) => {
    const usersRaw = await AsyncStorage.getItem('users');
    const users = JSON.parse(usersRaw || '[]');

    if (users.some((u: any) => u.email === data.email)) {
      toast.error('Este email já está cadastrado');
      return;
    }
    if (users.some((u: any) => u.braceletSerial === data.braceletSerial)) {
      toast.error('Este serial de pulseira já está cadastrado');
      return;
    }

    const newUser = {
      email: data.email,
      password: data.password,
      braceletSerial: data.braceletSerial,
      elderName: data.elderName.trim(),
      birthDate: data.birthDate,
      phone: data.phone,
      age: calcularIdade(data.birthDate),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));
    toast.success('Conta criada com sucesso!');
    await AsyncStorage.setItem('isAuthenticated', 'true');
    await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));
    navigation.navigate('MainTabs', { screen: 'Dashboard' });
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: insets.top + 32,
          paddingBottom: insets.bottom + 32,
          paddingHorizontal: 16,
        }}
        keyboardShouldPersistTaps="handled"
      >
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
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="seu@email.com"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        errorMessage={errors.email?.message}
                      />
                    )}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Número de telefone</Label>
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        keyboardType="phone-pad"
                        placeholder="(XX) XXXXX-XXXX"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        errorMessage={errors.phone?.message}
                      />
                    )}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Senha</Label>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <PasswordWrapper>
                          <PasswordInput
                            secureTextEntry={!showPassword}
                            placeholder="Mínimo 6 caracteres"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            $isInvalid={!!errors.password}
                          />
                          <PasswordToggle onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                              <EyeOff size={20} color="#6B7280" />
                            ) : (
                              <Eye size={20} color="#6B7280" />
                            )}
                          </PasswordToggle>
                        </PasswordWrapper>
                        {errors.password && (
                          <FieldError>{errors.password.message}</FieldError>
                        )}
                      </>
                    )}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Confirmar Senha</Label>
                  <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <PasswordWrapper>
                          <PasswordInput
                            secureTextEntry={!showConfirmPassword}
                            placeholder="Digite a senha novamente"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            $isInvalid={!!errors.confirmPassword}
                          />
                          <PasswordToggle onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? (
                              <EyeOff size={20} color="#6B7280" />
                            ) : (
                              <Eye size={20} color="#6B7280" />
                            )}
                          </PasswordToggle>
                        </PasswordWrapper>
                        {errors.confirmPassword && (
                          <FieldError>{errors.confirmPassword.message}</FieldError>
                        )}
                      </>
                    )}
                  />
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
                  <Controller
                    control={control}
                    name="elderName"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <InputWrapper>
                        <Input
                          placeholder="Ex: Maria Aparecida Silva"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          style={{ paddingRight: 40 }}
                          errorMessage={errors.elderName?.message}
                        />
                        <InputIcon>
                          <User size={20} color="#9CA3AF" />
                        </InputIcon>
                      </InputWrapper>
                    )}
                  />
                  <HintText>Nome do idoso que usará a pulseira</HintText>
                </FormGroup>

                <FormGroup>
                  <Label>Data de nascimento</Label>
                  <Controller
                    control={control}
                    name="birthDate"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <InputWrapper>
                        <Input
                          keyboardType="numbers-and-punctuation"
                          placeholder="AAAA-MM-DD"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          style={{ paddingRight: 40 }}
                          errorMessage={errors.birthDate?.message}
                        />
                        <InputIcon>
                          <Calendar size={20} color="#9CA3AF" />
                        </InputIcon>
                      </InputWrapper>
                    )}
                  />
                  {idade !== null && idade >= 0 && !errors.birthDate && (
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
                <Controller
                  control={control}
                  name="braceletSerial"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <InputWrapper>
                        <SerialInput
                          placeholder="XXXX-XXXX-XXXX"
                          value={value}
                          onChangeText={(text) => {
                            let v = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
                            if (v.length > 4) v = v.slice(0, 4) + '-' + v.slice(4);
                            if (v.length > 9) v = v.slice(0, 9) + '-' + v.slice(9);
                            if (v.length > 14) v = v.slice(0, 14);
                            onChange(v);
                          }}
                          onBlur={onBlur}
                          maxLength={14}
                          $isInvalid={!!errors.braceletSerial}
                        />
                        <InputIcon>
                          <Watch size={20} color="#9CA3AF" />
                        </InputIcon>
                      </InputWrapper>
                      {errors.braceletSerial && (
                        <FieldError>{errors.braceletSerial.message}</FieldError>
                      )}
                    </>
                  )}
                />
                <HintText>O serial está localizado na parte traseira da pulseira</HintText>
              </FormGroup>
            </Section>

            <SubmitButton onPress={handleSubmit(onSubmit)}>
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
          </Divider>
        </CardBox>
      </ScrollView>
    </Container>
  );
}
