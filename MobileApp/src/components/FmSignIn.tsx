import React from 'react';

import PrTextField from './common/PrTextField';
import PrButton from './common/PrButton';
import useForm from '../hooks/useForm';
import ApiService from '../services/ApiService';

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
      <PrTextField
        value={values.username.value}
        onChange={onChange}
        name="username"
      />
      <PrTextField
        value={values.username.value}
        onChange={onChange}
        name="password"
      />
      <PrButton title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default FmSignIn;