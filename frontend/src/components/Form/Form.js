import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

const Form = () => (
  <form noValidate autoComplete="off">
    <Input key={1} type="text" placeholder="Name" />
    <Input key={2} type="email" placeholder="Email" />
    <Textarea key={3} type="text" />
    <Button key={4} type="submit">
      Send
    </Button>
  </form>
);

export default Form;
