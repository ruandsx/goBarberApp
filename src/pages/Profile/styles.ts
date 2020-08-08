import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  padding: 0 30px 40px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 96px;

  align-self: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #3e3b47;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SignOutIcon = styled(Icon)`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
  margin-right: 8px;
`;

export const SignOutButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
