import foottyAPIServiceHelper from '../helpers/foottyAPI/foottyAPI.service.helper';
import {
  GetAllTeamsInLeaguePayload,
  GetLeagueDetailsPayload,
  GetLeagueSeasonsPayload,
  GetLeagueTablePayload,
  GetNextEventsPayload,
} from '../models/foottyAPI-leagure.service.model';

const { REACT_APP_PRIVATE_FOOTTY_END_POINT } = process.env;

const getLeagueDetails = (payload: GetLeagueDetailsPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookupleague.php?id=${payload.leagueId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};
const getAllTeamsInLeague = (payload: GetAllTeamsInLeaguePayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/search_all_teams.php?l=${payload.league}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};
const getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/search_all_seasons.php?id=${payload.leagueId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};
const getNextEvents = (payload: GetNextEventsPayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/eventsnextleague.php?id=${payload.leagueId}`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};
const getLeagueTable = (payload: GetLeagueTablePayload) => {
  const url: string = `${REACT_APP_PRIVATE_FOOTTY_END_POINT}/lookuptable.php?l=${payload.leagueId}&s=${
    payload.selectedSeason
  }`;

  return foottyAPIServiceHelper.getRequestHandler(url);
};

const FoottyAPILeagueService = {
  getLeagueDetails,
  getAllTeamsInLeague,
  getLeagueSeasons,
  getNextEvents,
  getLeagueTable,
};

export default FoottyAPILeagueService;
