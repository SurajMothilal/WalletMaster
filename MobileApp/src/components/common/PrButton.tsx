import React from 'react';
import {Button, ButtonProps} from 'react-native';

type Props = ButtonProps;

const PrButton: React.FC<Props> = ({title, onPress}) => {
  return <Button title={title} onPress={onPress} />;
};

export default PrButton;
