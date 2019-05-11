import foottyAPILeagueStoreHelper from './foottyAPI-league.store.helper';
import foottyAPIPlayerStoreHelper from './foottyAPI-player.store.helper';
import foottyAPITeamStoreHelper from './foottyAPI-team.store.helper';

const foottyAPIStoreHelper = {
  ...foottyAPILeagueStoreHelper,
  ...foottyAPITeamStoreHelper,
  ...foottyAPIPlayerStoreHelper,
};

export default foottyAPIStoreHelper;
