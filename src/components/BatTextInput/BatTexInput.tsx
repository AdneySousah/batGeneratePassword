import React from 'react';
import {  TextInput } from 'react-native';

import { styles } from './BatTextInput.style';


interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {

  return (
  
            <TextInput style={styles.inputer}
              /* secureTextEntry={true} */
              value ={props.pass}
              placeholder='password'
            />
       

  );
}