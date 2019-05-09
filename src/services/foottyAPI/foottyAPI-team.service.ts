import foottyAPIServiceHelper from '../helpers/foottyAPI/foottyAPI.service.helper';
import {
  GetAllPlayersInTeamPayload,
  GetLast5EventsPayload,
  GetNext5EventsPayload,
} from '../models/foottyAPI-team.service.model';

const { REACT_APP_PRIVATE_FOOTTY_END_POINT } = process.env;

const getAllPlayersInTeam = (payload: GetAllPlayersInTeamPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookup_all_players.php?id=${payload.teamId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const getNext5Events = (payload: GetNext5EventsPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/eventsnext.php?id=${payload.teamId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const getLast5Events = (payload: GetLast5EventsPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/eventslast.php?id=${payload.teamId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const FoottyAPITeamService = { getAllPlayersInTeam, getNext5Events, getLast5Events };

export default FoottyAPITeamService;
