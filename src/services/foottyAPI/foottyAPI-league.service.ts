import axios from 'axios';

import { GetLeagueDetailsPayload } from '../models/foottyAPI-leagure.service.model';

const { REACT_APP_PRIVATE_FOOTTY_END_POINT } = process.env;

class FoottyAPILeagueService {
  getLeagueDetails = (payload: GetLeagueDetailsPayload) => {
    const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookupleague.php?id=${payload.leagueId}`;

    return axios
      .get(url)
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };
}

export default FoottyAPILeagueService;
