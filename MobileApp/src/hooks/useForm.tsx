import React, {useState, Dispatch, SetStateAction} from 'react';

const validate = (
  formValues: {[key: string]: {[key: string]: string}},
  initialValues: {
    [key: string]: {
      value: string;
      validators: Array<() => {valid: boolean; error: string}>;
    };
  },
  setFormValues: Dispatch<SetStateAction<typeof formValues>>,
  onSubmit: (values: {[key: string]: {[key: string]: string}}) => void,
) => {
  const initialFormValues = initialValues;
  const keys = Object.keys(initialFormValues);
  keys.forEach(key => {
    initialFormValues[key].validators.forEach(validator => {});
  });
  onSubmit(formValues);
};

const useForm = (
  formName: string,
  initialValues: {
    [key: string]: {
      value: string;
      validators: Array<() => {valid: boolean; error: string}>;
    };
  },
  onSubmit: (values: {[key: string]: {[key: string]: string}}) => void,
) => {
  const initialFormValues = JSON.parse(JSON.stringify(initialValues));
  const keys = Object.keys(initialFormValues);
  keys.forEach(key => {
    delete initialFormValues[key].validators;
  });
  const [formValues, setFormValues] = useState(initialFormValues || {});

  return {
    values: formValues,
    onChange: (fieldname: string, text: string) =>
      setFormValues({...formValues, ...{[fieldname]: text}}),
    handleSubmit: () =>
      validate(formValues, initialValues, setFormValues, onSubmit),
  };
};

export default useForm;
