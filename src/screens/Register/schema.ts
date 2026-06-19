import * as yup from 'yup';

const SERIAL_REGEX = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

function parseDDMMYYYY(value: string): Date | null {
  const parts = value?.split('/');
  if (parts?.length !== 3) return null;
  const [day, month, year] = parts.map(Number);
  if (!day || !month || !year) return null;
  const date = new Date(year, month - 1, day);
  if (
    isNaN(date.getTime()) ||
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) return null;
  return date;
}

export function calcularIdadeDDMMYYYY(value: string): number | null {
  const date = parseDDMMYYYY(value);
  if (!date) return null;
  const hoje = new Date();
  let idade = hoje.getFullYear() - date.getFullYear();
  const mes = hoje.getMonth() - date.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < date.getDate())) idade--;
  return idade;
}

export function ddmmyyyyToISO(value: string): string {
  const parts = value.split('/');
  const [day, month, year] = parts.map(Number);
  return new Date(year, month - 1, day).toISOString();
}

export const registerSchema = yup.object({
  email: yup
    .string()
    .required('Email é obrigatório')
    .email('Insira um email válido'),

  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),

  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não coincidem'),

  elderName: yup
    .string()
    .required('Nome completo é obrigatório')
    .min(3, 'Informe o nome completo do usuário da pulseira'),

  birthDate: yup
    .string()
    .required('Data de nascimento é obrigatória')
    .test('data-valida', 'Data de nascimento inválida', (value) => {
      if (!value) return false;
      const idade = calcularIdadeDDMMYYYY(value);
      return idade !== null && idade >= 0 && idade <= 130;
    }),

  braceletSerial: yup
    .string()
    .required('Serial da pulseira é obrigatório')
    .transform((value: string) => value?.toUpperCase() ?? value)
    .matches(SERIAL_REGEX, 'Serial inválido. Formato: XXXX-XXXX-XXXX'),

  phone: yup
    .string()
    .required('Número de telefone é obrigatório')
    .matches(/^[\d\s()\-+]*$/, 'Número de telefone inválido'),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;
