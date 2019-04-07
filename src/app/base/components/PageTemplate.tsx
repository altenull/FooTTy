import * as React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../../assets/images/background.png';

const StPageTemplate = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
`;

const StHeader = styled.header`
  position: fixed;
  left: 16px;
  top: 16px;
`;

const StMain = styled.main`
  height: 100%;
`;

interface Props {
  pageHeader?: React.ReactNode;
  children: React.ReactNode;
}

class PageTemplate extends React.Component<Props> {
  render() {
    const { pageHeader, children } = this.props;

    return (
      <StPageTemplate>
        {pageHeader && <StHeader>{pageHeader}</StHeader>}
        <StMain>{children}</StMain>
      </StPageTemplate>
    );
  }
}

export default PageTemplate;
