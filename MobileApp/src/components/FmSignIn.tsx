import React from 'react';
import {StyleSheet, Text} from 'react-native';

import PrTextField from './common/PrTextField';
import PrButton from './common/PrButton';
import useForm from '../hooks/useForm';
import ApiService from '../services/ApiService';

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const FmSignIn = () => {
  const {onChange, handleSubmit, values} = useForm(
    'FmSignIn',
    {
      username: {
        value: '',
        validators: [() => null, () => null],
      },
      password: {
        value: '',
        validators: [() => null, () => null],
      },
    },
    values => console.log(ApiService('getUser', values)),
  );
  return (
    <>
      <Text style={styles.header}>Sign In</Text>
      <PrTextField
        value={values.username.value}
        onChange={onChange}
        placeholder="Username"
        name="username"
      />
      <PrTextField
        value={values.username.value}
        onChange={onChange}
        placeholder="Password"
        name="password"
      />
      <PrButton title="Sign In" onPress={handleSubmit} />
    </>
  );
};

export default FmSignIn;
