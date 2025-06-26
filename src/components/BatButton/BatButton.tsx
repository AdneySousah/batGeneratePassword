import React,{ useState, useRef} from 'react';
import { Text, Pressable, Animated } from 'react-native';
import { styles } from './BatButton.styles';
import { BatTextInput } from '../BatTextInput/BatTexInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';




export function BatButton() {

  /* melhorias aplicadas */
  const [copiedMessage, setCopiedMessage] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [ pass, setPass ] = useState('');

  function hadleGenerateButton() {
    let generateToken = generatePassword()
    setPass(generateToken);
  }

  function handleCopyToClipboard() {
    Clipboard.setString(pass);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    });


  }
  return (

    < >
   
        <BatTextInput
        pass={pass}
        />

        {/* gerador de senhas */}
        <Pressable

          style={styles.button}
          onPress={hadleGenerateButton} >
            <Text style={styles.text}>Generate</Text>
          </Pressable>


        {/* copiador de senhas */}
       
        <Pressable
          style={styles.button}
          onPress={handleCopyToClipboard} >
              <Text style={styles.text}>Copy</Text>
          </Pressable>
          
          <Animated.Text style={[styles.copyMessage, { opacity: fadeAnim }]}>
            Copiado para a área de transferência!
          </Animated.Text>
       
    </>
  );
}