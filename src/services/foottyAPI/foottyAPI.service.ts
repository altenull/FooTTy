import FoottyAPILeagueService from './foottyAPI-league.service';
import FoottyAPITeamService from './foottyAPI-team.service';

const FoottyAPIService = {
  ...FoottyAPILeagueService,
  ...FoottyAPITeamService,
};

export default FoottyAPIService;
