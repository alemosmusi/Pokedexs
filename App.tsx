import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      
    </NavigationContainer>
  );
}
