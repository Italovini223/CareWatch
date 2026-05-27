import styled from 'styled-components/native';

export const AlertWrapper = styled.View`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 20;
`;

export const AlertBox = styled.View`
  background-color: #dc2626;
  border-radius: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: flex-start;
`;

export const AlertIconWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px;
  border-radius: 999px;
  margin-right: 12px;
`;

export const AlertContent = styled.View`
  flex: 1;
`;

export const AlertTitle = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Bold};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  margin-bottom: 4px;
`;

export const AlertMessage = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm}px;
  margin-bottom: 4px;
`;

export const AlertHint = styled.Text`
  color: rgba(255, 255, 255, 0.85);
  font-family: ${({ theme }) => theme.FONTS.Sansation_Regular};
  font-size: ${({ theme }) => theme.FONT_SIZES.xs}px;
`;

export const DismissButton = styled.TouchableOpacity`
  padding: 4px;
  margin-left: 8px;
`;
