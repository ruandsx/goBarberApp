import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {
  useEffect(() => {
    // do all things before hid splash screen
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#312e28"
      />
      <AuthProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
