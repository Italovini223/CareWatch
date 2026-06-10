import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
`;

export const StyledInput = styled.TextInput<{ $isInvalid?: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.md}px;
  border-width: 1px;
  border-color: ${({ $isInvalid, theme }) =>
    $isInvalid ? theme.COLORS.RED[600] : theme.COLORS.GRAY[200]};
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  color: ${({ theme }) => theme.COLORS.GRAY[900]};
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED[600]};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  margin-top: 4px;
`;
