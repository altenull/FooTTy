import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { withLocale } from '../../contexts/locale.context';
import { GetFormerTeamsPayload, GetHonoursPayload } from '../../services/models/foottyAPI-player.service.model';
import { FoottyAPIActions } from '../../store/actionCreators';
import PageTemplate from '../base/components/PageTemplate';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate';
import ParallelogramHeader from '../ui/components/ParallelogramHeader';

interface Props extends RouteComponentProps<any> {
  localizedContents: any;
}

class PlayerPage extends React.Component<Props> {
  currentPlayerId: string = '';

  constructor(props: any) {
    super(props);
    const { match } = this.props;
    this.currentPlayerId = match.params.player;
    this.initPlayerPage(this.currentPlayerId);
  }

  initPlayerPage = (playerId: string): void => {
    FoottyAPIActions.getFormerTeams({ playerId } as GetFormerTeamsPayload);
    FoottyAPIActions.getHonours({ playerId } as GetHonoursPayload);
  };

  render() {
    const pageHeaderCopy: string = 'Player Page';
    const pageHeader: React.ReactNode = <ParallelogramHeader copy={pageHeaderCopy} />;

    // const left: React.ReactNode = <HexagonLabel/>;
    const right: React.ReactNode = <div>{this.currentPlayerId}</div>;

    return (
      <PageTemplate pageHeader={pageHeader}>
        <TwoColumnTemplate left={<div>Player Page</div>} right={right} />
      </PageTemplate>
    );
  }
}

export default withLocale(PlayerPage);
