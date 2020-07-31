import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const CreateAppointment: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Criação de Agendamento" onPress={signOut} />
    </View>
  );
};

export default CreateAppointment;
