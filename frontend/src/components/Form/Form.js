import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import FormWrapper from './FormWrapper';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <FormWrapper noValidate autoComplete="off">
        <Input
          onChange={this.handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <Input
          onChange={this.handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Textarea
          onChange={this.handleChange}
          name="message"
          type="text"
          placeholder="Message"
        />
        <Button type="submit">Send</Button>
      </FormWrapper>
    );
  }
}

export default Form;
