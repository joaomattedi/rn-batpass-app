import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import { styles } from './styles'
import { BatLogo } from '../../components/BatLogo';
import { BatButton } from '../../components/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.buttonContainer}
      >
        <BatButton />
      </KeyboardAvoidingView>

      <StatusBar style="light" />
    </View>
  );
}


