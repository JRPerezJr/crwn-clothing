import React from 'react';
import { CustomButton } from '../custom-button/custom-button';
import { FormInput } from '../form-input/form-input';
import './sign-in.styles.scss';

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}