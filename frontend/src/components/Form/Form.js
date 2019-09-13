import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import FormWrapper from './FormWrapper';

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate,
  );

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <FormWrapper onSubmit={handleSubmit} noValidate autoComplete="off">
      <Input
        error={errors.name}
        required
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
        value={values.name || ''}
      />
      <Input
        error={errors.email}
        required
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
        value={values.email || ''}
      />
      <Textarea
        error={errors.message}
        required
        onChange={handleChange}
        name="message"
        type="text"
        placeholder="Message"
        value={values.message || ''}
      />
      <Button type="submit">Send</Button>
    </FormWrapper>
  );
};

export default Form;
