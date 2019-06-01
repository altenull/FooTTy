import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ObjectizedLeagueDetails } from '../../../store/models/foottyAPI/foottyAPI-league.store.model';
import { RootState } from '../../../store/modules';

interface Props {
  leagueDetails: ObjectizedLeagueDetails | null;
}

class TemporaryLeagueDetailsContainer extends Component<Props> {
  render() {
    const { leagueDetails } = this.props;

    // TODO: Handle loading
    if (!leagueDetails) {
      return <div style={{ position: 'absolute', top: '22rem', left: '5rem', color: '#ffffff' }}>Loading...</div>;
    }
    // TODO: Naming of variables would be confused.
    // TODO: Create social collection component
    // intformedYear: string | null;
    // strCountry: string | null;
    // trophyUrl: string | null;
    // socialUrls: SocialUrls;

    return (
      <div style={{ position: 'absolute', top: '22rem', left: '5rem' }}>
        <div style={{ color: '#ffffff' }}>{leagueDetails.intFormedYear}</div>
        <div style={{ color: '#ffffff' }}>{leagueDetails.strCountry}</div>
        {!!leagueDetails.trophyUrl && <img src={leagueDetails.trophyUrl} alt='trophy' />}
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    leagueDetails: state.foottyAPI.foottyAPILeague.leagueDetails,
  }),
  () => ({})
)(TemporaryLeagueDetailsContainer);
