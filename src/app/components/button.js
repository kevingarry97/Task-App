import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

const AppButton = ({
  text,
  style,
  color = 'primary',
  textColor = 'white',
  onPress,
  width = '100%'
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: colors[color], width }, style]}>
      <Text style={[styles.text, { color: colors[textColor] }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
})

export default AppButton;
