import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type Props = {
  placeholder?: string;
} & TextInputProps;

const PrTextField: React.FC<Props> = ({placeholder, style}) => {
  const [value, onChangeText] = useState(placeholder || '');
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={[style || {}, styles.fieldStyle]}
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
