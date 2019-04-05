import axios from 'axios';

import { GetAllTeamsInLeaguePayload, GetLeagueDetailsPayload } from '../models/foottyAPI-leagure.service.model';

const { REACT_APP_PRIVATE_FOOTTY_END_POINT } = process.env;

class FoottyAPILeagueService {
  getLeagueDetails = (payload: GetLeagueDetailsPayload) => {
    const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookupleague.php?id=${payload.leagueId}`;

    return axios
      .get(url)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };

  getAllTeamsInLeague = (payload: GetAllTeamsInLeaguePayload) => {
    const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/search_all_teams.php?l=${payload.league}`;

    return axios
      .get(url)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
}

export default FoottyAPILeagueService;
