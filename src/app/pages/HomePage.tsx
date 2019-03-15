import * as React from 'react';

import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';
import RevealText from '../home/components/RevealText';

class HomePage extends React.Component {
  render() {
    const left: React.ReactNode = <RevealText />;
    const right = <div>right</div>;

    return (
      <PageTemplate>
        <TwoColumnTemplate left={left} right={right} />
      </PageTemplate>
    );
  }
}

export default HomePage;
