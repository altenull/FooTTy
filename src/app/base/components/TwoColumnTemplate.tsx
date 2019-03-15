import * as React from 'react';
import styled from 'styled-components';

const StTwoColumnTemplate = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: auto;
`;

const StLeftSection = styled.section`
  flex: 1;
`;

const StRightSection = styled.section`
  flex: 1;
`;

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

class TwoColumnTemplate extends React.Component<Props> {
  render() {
    const { left, right } = this.props;

    return (
      <StTwoColumnTemplate>
        <StLeftSection>{left}</StLeftSection>
        <StRightSection>{right}</StRightSection>
      </StTwoColumnTemplate>
    );
  }
}

export default TwoColumnTemplate;
