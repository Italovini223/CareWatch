import { ScrollView, Modal, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Heart, Eye, EyeOff, Watch, User, Calendar } from 'lucide-react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { ref, set, get, query, orderByChild, equalTo } from 'firebase/database';
import * as Crypto from 'expo-crypto';
import { auth, rtdb } from '../../lib/firebase';
import { toast } from '../../utils/toast';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { registerSchema, RegisterFormData, calcularIdadeDDMMYYYY, ddmmyyyyToISO } from './schema';
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
  DatePickerButton,
  DatePickerText,
  IOSPickerOverlay,
  IOSPickerContainer,
  IOSPickerHeader,
  IOSPickerTitle,
  IOSPickerAction,
  IOSPickerActionText,
} from './styles';

function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const MAX_DATE = new Date();
const MIN_DATE = new Date(1900, 0, 1);

export function Register() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(new Date(2000, 0, 1));

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const birthDate = watch('birthDate');
  const idade = calcularIdadeDDMMYYYY(birthDate || '');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const serialSnap = await get(
        query(ref(rtdb, 'users'), orderByChild('braceletSerial'), equalTo(data.braceletSerial))
      );
      if (serialSnap.exists()) {
        toast.error('Este serial de pulseira já está cadastrado');
        return;
      }

      const passwordHash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        data.password
      );

      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await set(ref(rtdb, `users/${user.uid}`), {
        email: data.email,
        braceletSerial: data.braceletSerial,
        elderName: data.elderName.trim(),
        birthDate: ddmmyyyyToISO(data.birthDate),
        phone: data.phone,
        age: calcularIdadeDDMMYYYY(data.birthDate),
        passwordHash,
        createdAt: new Date().toISOString(),
      });

      toast.success('Conta criada com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Este email já está cadastrado');
        } else if (error.code === 'auth/network-request-failed') {
          toast.error('Erro de conexão. Verifique sua internet');
        } else {
          toast.error('Erro ao criar conta. Tente novamente');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAndroidDateChange = (_: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setValue('birthDate', formatDateToDDMMYYYY(date), { shouldValidate: true });
    }
  };

  const handleIOSTempChange = (_: any, date?: Date) => {
    if (date) setTempDate(date);
  };

  const confirmIOSDate = () => {
    setValue('birthDate', formatDateToDDMMYYYY(tempDate), { shouldValidate: true });
    setShowDatePicker(false);
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
                  <DatePickerButton
                    $isInvalid={!!errors.birthDate}
                    onPress={() => setShowDatePicker(true)}
                    activeOpacity={0.7}
                  >
                    <DatePickerText $hasValue={!!birthDate}>
                      {birthDate || 'DD/MM/AAAA'}
                    </DatePickerText>
                    <Calendar size={18} color="#9CA3AF" />
                  </DatePickerButton>
                  {errors.birthDate && (
                    <FieldError>{errors.birthDate.message}</FieldError>
                  )}
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

            <SubmitButton onPress={handleSubmit(onSubmit)} disabled={isLoading}>
              <SubmitButtonText>{isLoading ? 'Criando conta...' : 'Criar Conta'}</SubmitButtonText>
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

      {/* Android: picker nativo abre como dialog automaticamente */}
      {showDatePicker && Platform.OS === 'android' && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="default"
          onChange={handleAndroidDateChange}
          maximumDate={MAX_DATE}
          minimumDate={MIN_DATE}
        />
      )}

      {/* iOS: picker dentro de modal com botão confirmar */}
      {Platform.OS === 'ios' && (
        <Modal
          visible={showDatePicker}
          transparent
          animationType="slide"
          onRequestClose={() => setShowDatePicker(false)}
        >
          <IOSPickerOverlay>
            <IOSPickerContainer>
              <IOSPickerHeader>
                <IOSPickerAction onPress={() => setShowDatePicker(false)}>
                  <IOSPickerActionText>Cancelar</IOSPickerActionText>
                </IOSPickerAction>
                <IOSPickerTitle>Data de Nascimento</IOSPickerTitle>
                <IOSPickerAction onPress={confirmIOSDate}>
                  <IOSPickerActionText $confirm>Confirmar</IOSPickerActionText>
                </IOSPickerAction>
              </IOSPickerHeader>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={handleIOSTempChange}
                maximumDate={MAX_DATE}
                minimumDate={MIN_DATE}
                locale="pt-BR"
                themeVariant="light"
                textColor="#111827"
                style={{ height: 200, width: '100%' }}
              />
            </IOSPickerContainer>
          </IOSPickerOverlay>
        </Modal>
      )}
    </Container>
  );
}
