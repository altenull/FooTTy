import {
  Event,
  GetAllPlayersInTeamResponse,
  GetLast5EventsResponse,
  GetNext5EventsResponse,
  ObjectizedLastEvent,
  ObjectizedNextEvent,
  ObjectizedPlayerInTeam,
  Player,
} from '../../models/foottyAPI/foottyAPI-team.store.model';

const getPlayers = (
  getAllPlayersInTeamResponse: GetAllPlayersInTeamResponse
): { [playerId: string]: ObjectizedPlayerInTeam } => {
  const players: { [playerId: string]: ObjectizedPlayerInTeam } = getAllPlayersInTeamResponse.player.reduce(
    (acc: { [playerId: string]: ObjectizedPlayerInTeam }, player: Player) => {
      return {
        ...acc,
        [player.idPlayer]: {
          idTeam: player.idTeam ? player.idTeam : null,
          idPlayerManager: player.idPlayerManager ? player.idPlayerManager : null,
          strNationality: player.strNationality,
          strPlayer: player.strPlayer,
          dateBorn: player.dateBorn ? player.dateBorn : null,
          strPosition: player.strPosition ? player.strPosition : null,
          strHeight: player.strHeight ? player.strHeight : null,
          strWeight: player.strWeight ? player.strWeight : null,
          facebookUrl: player.strFacebook ? player.strFacebook : null,
          websiteUrl: player.strWebsite ? player.strWebsite : null,
          twitterUrl: player.strTwitter ? player.strTwitter : null,
          instagramUrl: player.strInstagram ? player.strInstagram : null,
          youtubeUrl: player.strYoutube ? player.strYoutube : null,
          thumbUrl: player.strThumb ? player.strThumb : null,
        },
      };
    },
    {}
  );

  return players;
};

const getNext5Events = (getNext5EventsResponse: GetNext5EventsResponse): { [eventId: string]: ObjectizedNextEvent } => {
  const next5Events: { [eventId: string]: ObjectizedNextEvent } = getNext5EventsResponse.events.reduce(
    (acc: { [eventId: string]: ObjectizedNextEvent }, event: Event) => {
      return {
        ...acc,
        [event.idEvent]: {
          idEvent: event.idEvent,
          strEvent: event.strEvent,
          strFilename: event.strFilename,
          idLeague: event.idLeague,
          strLeague: event.strLeague,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound ? event.intRound : null,
          dateEvent: event.dateEvent,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam,
        },
      };
    },
    {}
  );

  return next5Events;
};

const getLast5Events = (getLast5EventsResponse: GetLast5EventsResponse): { [eventId: string]: ObjectizedLastEvent } => {
  const last5Events: { [eventId: string]: ObjectizedLastEvent } = getLast5EventsResponse.results.reduce(
    (acc: { [eventId: string]: ObjectizedLastEvent }, event: Event) => {
      return {
        ...acc,
        [event.idEvent]: {
          idEvent: event.idEvent,
          strEvent: event.strEvent,
          strFilename: event.strFilename,
          idLeague: event.idLeague,
          strLeague: event.strLeague,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound ? event.intRound : null,
          strHomeGoalDetails: event.strHomeGoalDetails ? event.strHomeGoalDetails : null,
          strAwayGoalDetails: event.strAwayGoalDetails ? event.strAwayGoalDetails : null,
          strHomeYellowCards: event.strHomeYellowCards ? event.strHomeYellowCards : null,
          strAwayYellowCards: event.strAwayYellowCards ? event.strAwayYellowCards : null,
          strHomeRedCards: event.strHomeRedCards ? event.strHomeRedCards : null,
          strAwayRedCards: event.strAwayRedCards ? event.strAwayRedCards : null,
          dateEvent: event.dateEvent,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam,
        },
      };
    },
    {}
  );

  return last5Events;
};

const foottyAPITeamStoreHelper = {
  getPlayers,
  getNext5Events,
  getLast5Events,
};

export default foottyAPITeamStoreHelper;
