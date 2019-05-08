import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const StEvenGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 140px);
  grid-gap: 80px;
  margin-bottom: -56px;
`;

class EvenGridWrapper extends Component<Props> {
  render() {
    const { children } = this.props;

    return <StEvenGridWrapper>{children}</StEvenGridWrapper>;
  }
}

export default EvenGridWrapper;
