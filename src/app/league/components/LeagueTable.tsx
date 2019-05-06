import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { withLocale } from '../../../contexts/locale.context';

interface Props {
  localizedContents: any;
  tableRows: ReactNode;
}

const StLeagueTable = styled.table`
  color: #ffffff;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin: 80px 0;
`;

class LeagueTable extends Component<Props> {
  render() {
    const { localizedContents, tableRows } = this.props;
    const leagueTableContents = localizedContents.league.leagueTable;

    return (
      <StLeagueTable cellPadding={'6'}>
        <thead>
          <tr>
            <th>{leagueTableContents.position}</th>
            <th>{leagueTableContents.club}</th>
            <th>{leagueTableContents.played}</th>
            <th>{leagueTableContents.won}</th>
            <th>{leagueTableContents.drawn}</th>
            <th>{leagueTableContents.lost}</th>
            <th>{leagueTableContents.goalsFor}</th>
            <th>{leagueTableContents.goalsAgainst}</th>
            <th>{leagueTableContents.goalDifference}</th>
            <th>{leagueTableContents.next}</th>
            <th>{leagueTableContents.points}</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </StLeagueTable>
    );
  }
}

export default withLocale(LeagueTable);
