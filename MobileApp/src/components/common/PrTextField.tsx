import React from 'react';
import {StyleSheet, TextInput, StyleProp, TextStyle} from 'react-native';

type Props = {
  value: string;
  name: string;
  onChange?: (fieldName: string, text: string) => void;
  style?: StyleProp<TextStyle>;
};

const PrTextField: React.FC<Props> = ({onChange, value, name, style}) => {
  return (
    <TextInput
      onChangeText={text => onChange(name, text)}
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
