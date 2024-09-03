import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import * as ClipBoard from 'expo-clipboard'

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('')
  const [copied, setCopied] = useState(false)

  function handleGenerateButton() {
    setPass(generatePass())
    setCopied(false)
  }

  async function handleCopyButton() {
    await ClipBoard.setStringAsync(pass)
    setCopied(true)
  }

  return (
    <>
      <BatTextInput
        pass={pass}
        onChange={handleGenerateButton}
      />
      <Pressable 
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>
          Generate
        </Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={handleCopyButton}
      >
        <Text style={styles.text}>
          COPY
        </Text>
      </Pressable>
      <Text>
      { copied &&
        'Copiado para clipboard'
      }
      </Text>
    </>
  );
}