import React, { Component } from 'react';
import styled from 'styled-components';

import { ObjectizedLeagueTable } from '../../../store/models/foottyAPI/foottyAPI-league.store.model';
import { NextEvent } from '../models/league.model';

interface Props {
  teamId: string;
  rank: number;
  badgeUrl: string | null;
  data: ObjectizedLeagueTable;
  nextEvent: NextEvent | null;
  onSelectTeam(teamId: string): void;
}

const StLeagueTableRow = styled.tr`
  font-size: 1.25rem;
  line-height: 3;
  cursor: pointer;
`;

const StLeagueTableTd = styled.td`
  text-align: center;
`;

class LeagueTableRow extends Component<Props> {
  render() {
    const { teamId, rank, badgeUrl, data, nextEvent, onSelectTeam } = this.props;

    const handledGoalsDifference: string =
      data.goalsdifference > 0 ? `+${data.goalsdifference}` : `${data.goalsdifference}`;

    return (
      <StLeagueTableRow onClick={() => onSelectTeam(teamId)}>
        <th>{rank}</th>
        <StLeagueTableTd style={{ textAlign: 'left' }}>
          <span>{badgeUrl ? <img src={badgeUrl} width={'36px'} alt={data.name} /> : 'No image'}</span> {data.name}
        </StLeagueTableTd>
        <StLeagueTableTd>{data.played}</StLeagueTableTd>
        <StLeagueTableTd>{data.win}</StLeagueTableTd>
        <StLeagueTableTd>{data.draw}</StLeagueTableTd>
        <StLeagueTableTd>{data.loss}</StLeagueTableTd>
        <StLeagueTableTd>{data.goalsfor}</StLeagueTableTd>
        <StLeagueTableTd>{data.goalsagainst}</StLeagueTableTd>
        <StLeagueTableTd>{handledGoalsDifference}</StLeagueTableTd>
        <StLeagueTableTd>
          <span>
            {nextEvent != null && nextEvent.badgeUrl ? (
              <img src={nextEvent.badgeUrl} width={'36px'} alt={nextEvent.name} />
            ) : (
              'No image'
            )}
          </span>
        </StLeagueTableTd>
        <StLeagueTableTd>{data.total}</StLeagueTableTd>
      </StLeagueTableRow>
    );
  }
}

export default LeagueTableRow;
