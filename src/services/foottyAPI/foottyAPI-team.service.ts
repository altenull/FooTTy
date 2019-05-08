import foottyAPIServiceHelper from '../helpers/foottyAPI/foottyAPI.service.helper';
import { GetAllPlayersInTeamPayload } from '../models/foottyAPI-team.service.model';

const { REACT_APP_PRIVATE_FOOTTY_END_POINT } = process.env;

const getAllPlayersInTeam = (payload: GetAllPlayersInTeamPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookup_all_players.php?id=${payload.teamId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const FoottyAPITeamService = { getAllPlayersInTeam };

export default FoottyAPITeamService;
