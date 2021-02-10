import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error.boundary.styles';

import Doge from '../../assets/lKJiT77.png';
export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={Doge} />
        <ErrorImageText>A Doge Ate this Page</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}
