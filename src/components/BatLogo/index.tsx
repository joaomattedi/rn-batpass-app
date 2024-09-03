import React from 'react';
import { Image, Text, View } from 'react-native';

import batLogo from '../../../assets/batLogo.png'

import { styles } from './styles';

export function BatLogo() {
  return (
    <>
      <Text style={styles.title} >SENHAS DO BATMAO</Text>
      <Image style={styles.image} source={batLogo} />
    </>
  );
}