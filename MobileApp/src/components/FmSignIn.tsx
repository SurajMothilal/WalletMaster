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
      <PrButton title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default FmSignIn;
