import FoottyAPILeagueService from './foottyAPI-league.service';
import FoottyAPIPlayerService from './foottyAPI-player.service';
import FoottyAPITeamService from './foottyAPI-team.service';

const FoottyAPIService = {
  ...FoottyAPILeagueService,
  ...FoottyAPITeamService,
  ...FoottyAPIPlayerService,
};

export default FoottyAPIService;
