import React, { Component, ReactNode } from 'react';

import { withLocale } from '../../contexts/locale.context';
import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';
import LeagueSelector from '../home/components/LeagueSelector';
import RevealText from '../home/components/RevealText';

interface Props {
  localizedContents: any;
}

class HomePage extends Component<Props> {
  render() {
    const { localizedContents } = this.props;
    const leagueCollection = localizedContents.league.leagueCollection;

    const leagueSelectors = Object.keys(leagueCollection).map((leagueId: string) => {
      const leagueInfo = leagueCollection[leagueId];

      return (
        <LeagueSelector
          key={leagueId}
          linkTo={leagueId}
          alias={leagueInfo.alias}
          fullName={leagueInfo.fullName}
          displayName={leagueInfo.displayName}
          badgeGrey={leagueInfo.badgeGrey}
        />
      );
    });

    const left: ReactNode = <RevealText />;
    const right: ReactNode = <div>{leagueSelectors}</div>;

    return (
      <PageTemplate>
        <TwoColumnTemplate left={left} right={right} />
      </PageTemplate>
    );
  }
}

export default withLocale(HomePage);
