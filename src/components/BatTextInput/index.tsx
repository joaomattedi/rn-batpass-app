import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

interface BatInputProps {
  pass: string
  onChange: (value: string) => void
}

export function BatTextInput({ pass }: BatInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder='pass'
      returnKeyType='done'
      value={pass}
    />
  );
}