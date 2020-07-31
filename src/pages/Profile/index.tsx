import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Profile" onPress={signOut} />
    </View>
  );
};

export default Profile;
