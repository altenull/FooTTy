import {
  GetAllTeamsInLeagueResponse,
  GetLeagueDetailsResponse,
  GetLeagueSeasonsResponse,
  LeagueDetails,
  LeagueSeason,
  ObjectizedLeagueDetails,
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
  const leagueSeasons = getLeagueSeasonsResponse.seasons.reduce((acc: string[], season: LeagueSeason) => {
    return [...acc, season.strSeason];
  }, []);

  return leagueSeasons.reverse();
};

const foottyAPIHelper = { getLeagueDetails, getAllTeamsInLeague, getLeagueSeasons };

export default foottyAPIHelper;
