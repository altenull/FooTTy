import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { withLocale } from '../../contexts/locale.context';
import { GetAllPlayersInTeamPayload } from '../../services/models/foottyAPI-team.service.model';
import { FoottyAPIActions } from '../../store/actionCreators';
import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';
import ParallelogramHeader from '../ui/components/ParallelogramHeader';

interface Props extends RouteComponentProps<any> {
  localizedContents: any;
}

class TeamPage extends React.Component<Props> {
  currentTeamId: string = '';

  constructor(props: any) {
    super(props);
    const { match } = this.props;
    this.currentTeamId = match.params.team;
    this.initTeamPage(this.currentTeamId);
  }

  initTeamPage = (teamId: string): void => {
    FoottyAPIActions.getAllPlayersInTeam({ teamId } as GetAllPlayersInTeamPayload);
  };

  render() {
    const pageHeaderCopy: string = 'Team Page';
    const pageHeader: React.ReactNode = <ParallelogramHeader copy={pageHeaderCopy} />;

    // const left: React.ReactNode = <HexagonLabel/>;
    const right: React.ReactNode = <div>Team Page</div>;

    return (
      <PageTemplate pageHeader={pageHeader}>
        <TwoColumnTemplate left={<div>Team Page</div>} right={right} />
      </PageTemplate>
    );
  }
}

export default withLocale(TeamPage);
