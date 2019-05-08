import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const StOddGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 140px);
  grid-gap: 80px;
  margin-bottom: -56px;
  transform: translateX(110px);
`;

class OddGridWrapper extends Component<Props> {
  render() {
    const { children } = this.props;

    return <StOddGridWrapper>{children}</StOddGridWrapper>;
  }
}

export default OddGridWrapper;
