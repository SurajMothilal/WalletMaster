import React, {useState} from 'react';
import {StyleSheet, ViewStyle, TextInput, TextInputProps} from 'react-native';

type Props = {
  placeholder?: string;
  style?: ViewStyle;
} & TextInputProps;

const PrTextField = ({placeholder, style}) => {
  const [value, onChangeText] = useState(placeholder);
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={[style, styles.fieldStyle]}
    />
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    height: 40,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default PrTextField;
