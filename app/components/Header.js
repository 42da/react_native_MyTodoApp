// app/components/Header.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 예전에 배웠던 arrow function
const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>My To-Do App</Text>
  </View>
);

const styles = StyleSheet.create({
    headerContainer: {
      marginTop:70,
      marginBottom:40
    },
    headerText: {
      fontSize: 26,
      fontWeight: '600',
      color:'#3f4e66'
    }
  })

export default Header;