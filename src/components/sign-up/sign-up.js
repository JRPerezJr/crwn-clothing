import React from 'react';
import { signUpStart } from '../../redux/user/user.actions';

import { CustomButton } from '../custom-button/custom-button';
import { FormInput } from '../form-input/form-input';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
