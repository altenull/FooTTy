import foottyAPILeagueStoreHelper from './foottyAPI-league.store.helper';
import foottyAPITeamStoreHelper from './foottyAPI-team.store.helper';

const foottyAPIStoreHelper = { ...foottyAPILeagueStoreHelper, ...foottyAPITeamStoreHelper };

export default foottyAPIStoreHelper;
