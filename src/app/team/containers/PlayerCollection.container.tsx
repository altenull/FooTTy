import * as React from 'react';
import { connect } from 'react-redux';

import { ObjectizedPlayerInTeam } from '../../../store/models/foottyAPI/foottyAPI-team.store.model';
import { RootState } from '../../../store/modules';
import HexagonLabel from '../../ui/components/HexagonLabel';
import EvenGridWrapper from '../components/EvenGridWrapper';
import OddGridWrapper from '../components/OddGridWrapper';

interface Props {
  allPlayersInTeam: { [playerId: string]: ObjectizedPlayerInTeam } | null;
}

class PlayerCollectionContainer extends React.Component<Props> {
  handleSelectPlayer = (playerId: string) => {
    // TODO: Request API related with player
    // FoottyAPIActions.getFormerTeams({ playerId } as GetFormerTeamsPayload);
    // FoottyAPIActions.getHonours({ playerId } as GetHonoursPayload);
  };

  render() {
    const { allPlayersInTeam } = this.props;
    const { handleSelectPlayer } = this;

    // TODO: Handle loading
    if (!allPlayersInTeam) {
      return <div style={{ color: 'white' }}>Loading...</div>;
    }

    const wholePlayerIds: string[] = Object.keys(allPlayersInTeam);
    const pusherFlags = [42, 38, 35, 31, 28, 24, 21, 17, 14, 10, 7, 3]; // Assume maximum player is 42.

    let pusher: string[] = [];
    let pusherIndex: number | undefined = pusherFlags.pop();
    let hierarchicalPlayerIds: string[][] = [];

    for (let i = 0; i < wholePlayerIds.length; i++) {
      if (pusherIndex != null && i < pusherIndex) {
        pusher.push(wholePlayerIds[i]);
        if (i === wholePlayerIds.length - 1) {
          hierarchicalPlayerIds = [...hierarchicalPlayerIds, [...pusher]];
        }
      } else {
        hierarchicalPlayerIds = [...hierarchicalPlayerIds, [...pusher]];
        pusher = [];
        pusher.push(wholePlayerIds[i]);
        pusherIndex = pusherFlags.pop();
      }
    }

    const playerList: React.ReactNode = hierarchicalPlayerIds.map((playerIds: string[], index: number) => {
      const isOdd: boolean = index % 2 === 0;
      const GridWrapper = isOdd ? OddGridWrapper : EvenGridWrapper;

      return (
        <GridWrapper key={index}>
          {playerIds.map((playerId: string) => (
            <HexagonLabel
              key={playerId}
              id={playerId}
              imgUrl={allPlayersInTeam[playerId].thumbUrl}
              label={allPlayersInTeam[playerId].strPlayer}
              onSelectPlayer={handleSelectPlayer}
            />
          ))}
        </GridWrapper>
      );
    });

    return <>{playerList}</>;
  }
}

export default connect(
  (state: RootState) => ({
    allPlayersInTeam: state.foottyAPI.foottyAPITeam.allPlayersInTeam,
  }),
  () => ({})
)(PlayerCollectionContainer);
