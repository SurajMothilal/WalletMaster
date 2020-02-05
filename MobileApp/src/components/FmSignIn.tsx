import React from 'react';

import PrTextField from './common/PrTextField';
import PrButton from './common/PrButton';
import useForm from '../hooks/useForm';

const FmSignIn = () => {
  const {onChange, handleSubmit, values} = useForm(
    'FmSignIn',
    {
      username: {
        value: '',
        validators: ['yolo'],
      },
      password: {
        value: '',
        validators: ['yolo2'],
      },
    },
    values => console.log(values),
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
