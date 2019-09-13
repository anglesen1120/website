import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import FormWrapper from './FormWrapper';

const Form = () => (
  <FormWrapper noValidate autoComplete="off">
    <Input key={1} type="text" placeholder="Name" />
    <Input key={2} type="email" placeholder="Email" />
    <Textarea key={3} type="text" placeholder="Message" />
    <Button key={4} type="submit">
      Send
    </Button>
  </FormWrapper>
);

export default Form;
