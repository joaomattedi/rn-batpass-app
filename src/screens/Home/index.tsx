import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { styles } from './styles'
import { BatLogo } from '../../components/BatLogo';
import { BatTextInput } from '../../components/BatTextInput';
import { BatButton } from '../../components/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      
      <View style={styles.buttonContainer}>
        <BatButton />
      </View>

      <StatusBar style="light" />
    </View>
  );
}


