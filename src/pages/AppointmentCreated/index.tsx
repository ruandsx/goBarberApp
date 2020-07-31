import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Agendamento criado" onPress={signOut} />
    </View>
  );
};

export default AppointmentCreated;
