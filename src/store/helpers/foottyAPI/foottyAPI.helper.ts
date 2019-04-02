import {
  GetLeagueDetailsResponse,
  LeagueDetails,
  ObjectizedLeagueDetails,
} from '../../models/foottyAPI/foottyAPI-league.store.model';

export const getLeagueDeatils = (
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

const foottyAPIHelper = { getLeagueDeatils };

export default foottyAPIHelper;
