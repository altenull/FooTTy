import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { withLocale } from '../../contexts/locale.context';
import { GetAllTeamsInLeaguePayload, GetLeagueDetailsPayload } from '../../services/models/foottyAPI-leagure.service.model';
import { FoottyAPIActions, LeagueActions } from '../../store/actionCreators';
import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';

interface Props extends RouteComponentProps<any> {
  localizedContents: any;
}

class LeaguePage extends React.Component<Props> {
  currentLeagueId: string = '';

  constructor(props: any) {
    super(props);
    const { match } = this.props;
    this.currentLeagueId = match.params.league;
    this.initLeaguePage(this.currentLeagueId);
  }

  componentWillUnmount() {
    FoottyAPIActions.resetFoottyAPILeague();
    LeagueActions.resetLeague();
  }

  initLeaguePage = (leagueId: string): void => {
    const { localizedContents } = this.props;
    const leagueCollection = localizedContents.league.leagueCollection;
    const league: string = leagueCollection[leagueId].fullName;

    FoottyAPIActions.getLeagueDetails({ leagueId } as GetLeagueDetailsPayload);
    FoottyAPIActions.getAllTeamsInLeague({ league } as GetAllTeamsInLeaguePayload);
  };

  render() {
    const left: React.ReactNode = <div>Left</div>;
    const right: React.ReactNode = <div>Right</div>;

    return (
      <PageTemplate>
        <TwoColumnTemplate left={left} right={right} />
      </PageTemplate>
    );
  }
}

export default withLocale(LeaguePage);
