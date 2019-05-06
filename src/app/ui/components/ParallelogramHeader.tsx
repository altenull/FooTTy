import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  badge?: string;
  copy: string;
}

const StParallelogramHeader = styled.div`
  display: inline-flex;
  align-items: center;
  height: 56px;
  padding: 0 40px;
  font-size: 1.75rem;
  color: #ffffff;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
`;

const StParallelogramHeaderBadge = styled.img`
  width: 44px;
  margin-right: 8px;
`;

class ParallelogramHeader extends Component<Props> {
  render() {
    const { badge, copy } = this.props;

    return (
      <StParallelogramHeader>
        {!!badge && <StParallelogramHeaderBadge src={badge} alt={copy} />}
        {copy}
      </StParallelogramHeader>
    );
  }
}

export default ParallelogramHeader;
