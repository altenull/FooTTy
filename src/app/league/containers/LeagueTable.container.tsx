import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import {
  ObjectizedEventInLeague,
  ObjectizedLeagueTable,
  ObjectizedTeamInLeague,
} from '../../../store/models/foottyAPI/foottyAPI-league.store.model';
import { RootState } from '../../../store/modules';
import LeagueTable from '../components/LeagueTable';
import LeagueTableRow from '../components/LeagueTableRow';
import { NextEvent } from '../models/league.model';

interface Props {
  leagueTable: { [teamId: string]: ObjectizedLeagueTable } | null;
  allTeamsInLeague: { [teamId: string]: ObjectizedTeamInLeague } | null;
  nextEvents: { [eventId: string]: ObjectizedEventInLeague } | null;
}

class LeagueTableContainer extends Component<Props> {
  handleSelectTeam = (teamId: string): void => {
    window.location.href = `${window.location.href}/${teamId}`;
  };

  sortTeamIds = (leagueTable: { [teamId: string]: ObjectizedLeagueTable }) => {
    return Object.keys(leagueTable).sort((prevTeamId: string, nextTeamId: string) => {
      return leagueTable[prevTeamId].rank < leagueTable[nextTeamId].rank
        ? -1
        : leagueTable[prevTeamId].rank > leagueTable[nextTeamId].rank
        ? 1
        : 0;
    });
  };

  render() {
    const { leagueTable, allTeamsInLeague, nextEvents } = this.props;
    const { handleSelectTeam } = this;

    // TODO: Handle loading
    if (!leagueTable || !allTeamsInLeague || !nextEvents) {
      return <div style={{ color: 'white' }}>Loading...</div>;
    }

    const orderedTeamIds: string[] = this.sortTeamIds(leagueTable!);
    const orderedNextEvents: ObjectizedEventInLeague[] = Object.values(nextEvents);

    const tableRows: ReactNode = orderedTeamIds.map((teamId: string, index: number) => {
      let isTeamBelongToHomeInNextEvent: boolean = false;

      const foundNextEvent: ObjectizedEventInLeague | undefined = orderedNextEvents.find(
        (orderedNextEvent: ObjectizedEventInLeague) => {
          if (orderedNextEvent.idHomeTeam === teamId) {
            return true;
          } else if (orderedNextEvent.idAwayTeam === teamId) {
            isTeamBelongToHomeInNextEvent = true;
            return true;
          }

          return false;
        }
      );

      const badgeUrl: string | null = (allTeamsInLeague[teamId] && allTeamsInLeague[teamId].badgeUrl) || null;
      const nextEventBadgeUrl: string | null =
        (foundNextEvent &&
          (isTeamBelongToHomeInNextEvent
            ? allTeamsInLeague[foundNextEvent.idHomeTeam] && allTeamsInLeague[foundNextEvent.idHomeTeam].badgeUrl
            : allTeamsInLeague[foundNextEvent.idAwayTeam] && allTeamsInLeague[foundNextEvent.idAwayTeam].badgeUrl)) ||
        null;

      const nextEvent: NextEvent | null = !foundNextEvent
        ? null
        : {
            date: foundNextEvent.dateEvent,
            time: foundNextEvent.strTime,
            round: foundNextEvent.intRound,
            name: foundNextEvent.strEvent,
            badgeUrl: nextEventBadgeUrl,
          };

      return (
        <LeagueTableRow
          key={teamId}
          teamId={teamId}
          rank={++index}
          badgeUrl={badgeUrl}
          data={leagueTable[teamId]}
          nextEvent={nextEvent}
          onSelectTeam={handleSelectTeam}
        />
      );
    });

    return <LeagueTable tableRows={tableRows} />;
  }
}

export default connect(
  (state: RootState) => ({
    leagueTable: state.foottyAPI.foottyAPILeague.leagueTable,
    allTeamsInLeague: state.foottyAPI.foottyAPILeague.allTeamsInLeague,
    nextEvents: state.foottyAPI.foottyAPILeague.nextEvents,
  }),
  () => ({})
)(LeagueTableContainer);
