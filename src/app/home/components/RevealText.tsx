import * as React from 'react';
import styled from 'styled-components';

const StMainTitle = styled.h1`
  color: #868e96;
  font-size: 5.5rem;
  font-weight: 800;
  margin: 0 0 -0.125em 0;
  padding: 0;
`;

const StSubTitle = styled.h3`
  color: #214953;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.75em 0;
  padding: 0;
`;

class RevealText extends React.Component {
  render() {
    return (
      <div>
        <StMainTitle>FOOTTY</StMainTitle>
        <StSubTitle>A FOOTBALL TERMINAL</StSubTitle>
      </div>
    );
  }
}

export default RevealText;
