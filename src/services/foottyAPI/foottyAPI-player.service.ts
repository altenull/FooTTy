import foottyAPIServiceHelper from '../helpers/foottyAPI/foottyAPI.service.helper';
import { GetFormerTeamsPayload, GetHonoursPayload } from '../models/foottyAPI-player.service.model';

const { REACT_APP_PUBLIC_FOOTTY_END_POINT } = process.env;

const getFormerTeams = (payload: GetFormerTeamsPayload) => {
  const url: string = `${REACT_APP_PUBLIC_FOOTTY_END_POINT}/lookupformerteams.php?id=${payload.playerId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const getHonours = (payload: GetHonoursPayload) => {
  const url: string = `${REACT_APP_PUBLIC_FOOTTY_END_POINT}/lookuphonors.php?id=${payload.playerId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const FoottyAPIPlayerService = { getFormerTeams, getHonours };

export default FoottyAPIPlayerService;
