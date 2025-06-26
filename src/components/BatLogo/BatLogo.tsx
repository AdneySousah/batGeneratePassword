import React from 'react';
import { View ,Text,Image } from 'react-native';

import { styles } from './BatLogo.styles';
import batlogo from '../../../assets/logo_batman.png';

export function BatLogo() {
  return (
    <View >
        <Text style={styles.title}>Bat pass generator</Text>
        <Image style={styles.image} source={batlogo}/>
    </View>
  );
}