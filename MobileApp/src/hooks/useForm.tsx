import React, {useState} from 'react';

const validate = (
  formValues: {[key: string]: {[key: string]: string}},
  initialValues: {[key: string]: {value: string; validators: Array<string>}},
  onSubmit: (values: {[key: string]: {[key: string]: string}}) => void,
) => {
  const initialFormValues = initialValues;
  const keys = Object.keys(initialFormValues);
  keys.forEach(key => {
    initialFormValues[key].validators.forEach(validator => {
      console.log(validator);
    });
  });
  onSubmit(formValues);
};

const useForm = (
  formName: string,
  initialValues: {[key: string]: {value: string; validators: Array<string>}},
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
    handleSubmit: () => validate(formValues, initialValues, onSubmit),
  };
};

export default useForm;
