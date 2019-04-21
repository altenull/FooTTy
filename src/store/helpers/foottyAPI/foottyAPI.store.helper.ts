import {
  EventInLeague,
  GetAllTeamsInLeagueResponse,
  GetLeagueDetailsResponse,
  GetLeagueSeasonsResponse,
  GetLeagueTableResponse,
  GetNextEventsResponse,
  LeagueDetails,
  LeagueSeason,
  LeagueTable,
  ObjectizedEventInLeague,
  ObjectizedLeagueDetails,
  ObjectizedLeagueTable,
  ObjectizedTeamInLeague,
  TeamInLeague,
} from '../../models/foottyAPI/foottyAPI-league.store.model';

const getLeagueDetails = (
  getLeagueDetailsResponse: GetLeagueDetailsResponse
): { [leagueId: string]: ObjectizedLeagueDetails } => {
  const leagueDetails: { [leagueId: string]: ObjectizedLeagueDetails } = getLeagueDetailsResponse.leagues.reduce(
    (acc: { [leagueId: string]: ObjectizedLeagueDetails }, leagueDetail: LeagueDetails) => {
      return {
        ...acc,
        [leagueDetail.idLeague]: {
          strLeague: leagueDetail.strLeague,
          intFormedYear: leagueDetail.intFormedYear ? leagueDetail.intFormedYear : null,
          strCountry: leagueDetail.strCountry ? leagueDetail.strCountry : null,
          badgeUrl: leagueDetail.strBadge ? leagueDetail.strBadge : null,
          trophyUrl: leagueDetail.strTrophy ? leagueDetail.strTrophy : null,
          socialUrls: {
            websiteUrl: leagueDetail.strWebsite ? leagueDetail.strWebsite : null,
            facebookUrl: leagueDetail.strFacebook ? leagueDetail.strFacebook : null,
            twitterUrl: leagueDetail.strTwitter ? leagueDetail.strTwitter : null,
            youtubeUrl: leagueDetail.strYoutube ? leagueDetail.strYoutube : null,
          },
        },
      };
    },
    {}
  );

  return leagueDetails;
};

const getAllTeamsInLeague = (
  getAllTeamsInLeagueResponse: GetAllTeamsInLeagueResponse
): { [teamId: string]: ObjectizedTeamInLeague } => {
  const allTeamsInLeague: {
    [teamId: string]: ObjectizedTeamInLeague;
  } = getAllTeamsInLeagueResponse.teams.reduce(
    (acc: { [teamId: string]: ObjectizedTeamInLeague }, team: TeamInLeague) => {
      return {
        ...acc,
        [team.idTeam]: {
          formedYear: team.intFormedYear ? team.intFormedYear : null,
          stadiumCapacity: team.intStadiumCapacity ? team.intStadiumCapacity : null,
          badgeUrl: team.strTeamBadge ? team.strTeamBadge : null,
          socialUrls: {
            websiteUrl: team.strWebsite ? team.strWebsite : null,
            facebookUrl: team.strFacebook ? team.strFacebook : null,
            twitterUrl: team.strTwitter ? team.strTwitter : null,
            instagramUrl: team.strInstagram ? team.strInstagram : null,
            youtubeUrl: team.strYoutube ? team.strYoutube : null,
          },
        },
      };
    },
    {}
  );

  return allTeamsInLeague;
};

const getLeagueSeasons = (getLeagueSeasonsResponse: GetLeagueSeasonsResponse): string[] => {
  const leagueSeasons: string[] = getLeagueSeasonsResponse.seasons.reduce((acc: string[], season: LeagueSeason) => {
    return [...acc, season.strSeason];
  }, []);

  return leagueSeasons.reverse();
};

const getNextEvents = (
  getNextEventsResponse: GetNextEventsResponse
): { [eventId: string]: ObjectizedEventInLeague } => {
  const nextEvents: { [eventId: string]: ObjectizedEventInLeague } = getNextEventsResponse.events.reduce(
    (acc: { [eventId: string]: ObjectizedEventInLeague }, event: EventInLeague) => {
      return {
        ...acc,
        [event.idEvent]: {
          strEvent: event.strEvent,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound,
          dateEvent: event.dateEvent,
          strDate: event.strDate,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam,
        },
      };
    },
    {}
  );

  return nextEvents;
};

const getLeagueTable = (
  getLeagueTableResponse: GetLeagueTableResponse
): {
  [teamId: string]: ObjectizedLeagueTable;
} => {
  const leagueTable: {
    [teamId: string]: ObjectizedLeagueTable;
  } = getLeagueTableResponse.table.reduce(
    (acc: { [teamId: string]: ObjectizedLeagueTable }, table: LeagueTable, index: number) => {
      const { teamid: extractedValue, ...tableEntity } = table;
      return {
        ...acc,
        [table.teamid]: {
          ...tableEntity,
          rank: index,
        },
      };
    },
    {}
  );

  return leagueTable;
};

const foottyAPIStoreHelper = { getLeagueDetails, getAllTeamsInLeague, getLeagueSeasons, getNextEvents, getLeagueTable };

export default foottyAPIStoreHelper;
