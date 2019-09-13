import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import FormWrapper from './FormWrapper';

const Form = () => (
  <FormWrapper noValidate autoComplete="off">
    <Input type="text" placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <Textarea type="text" placeholder="Message" />
    <Button type="submit">Send</Button>
  </FormWrapper>
);

export default Form;
