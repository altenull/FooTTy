import React, { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { withLocale } from '../../contexts/locale.context';
import {
  GetAllTeamsInLeaguePayload,
  GetLeagueDetailsPayload,
  GetLeagueSeasonsPayload,
  GetNextEventsPayload,
} from '../../services/models/foottyAPI-league.service.model';
import { FoottyAPIActions, LeagueActions } from '../../store/actionCreators';
import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';
import LeagueDetailsContainer from '../league/containers/LeagueDetails.container';
import LeagueTableContainer from '../league/containers/LeagueTable.container';
import SeasonSelectorContainer from '../league/containers/SeasonSelector.container';
import ParallelogramHeader from '../ui/components/ParallelogramHeader';

interface Props extends RouteComponentProps<any> {
  localizedContents: any;
}

class LeaguePage extends Component<Props> {
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
    FoottyAPIActions.getLeagueSeasons({ leagueId } as GetLeagueSeasonsPayload);
    FoottyAPIActions.getNextEvents({ leagueId } as GetNextEventsPayload);
  };

  render() {
    const { localizedContents } = this.props;
    const leagueCollection = localizedContents.league.leagueCollection;

    const pageHeaderBadge: string = leagueCollection[this.currentLeagueId].badge;
    const pageHeaderCopy: string = leagueCollection[this.currentLeagueId].displayName;
    const pageHeader: ReactNode = <ParallelogramHeader badge={pageHeaderBadge} copy={pageHeaderCopy} />;

    const left: ReactNode = (
      <div>
        <SeasonSelectorContainer leagueId={this.currentLeagueId} />
        <LeagueDetailsContainer />
      </div>
    );
    const right: ReactNode = <LeagueTableContainer />;

    return (
      <PageTemplate pageHeader={pageHeader}>
        <TwoColumnTemplate left={left} right={right} />
      </PageTemplate>
    );
  }
}

export default withLocale(LeaguePage);
