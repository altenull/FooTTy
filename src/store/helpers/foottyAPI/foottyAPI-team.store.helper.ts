import {
  GetAllPlayersInTeamResponse,
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

const foottyAPITeamStoreHelper = {
  getPlayers,
};

export default foottyAPITeamStoreHelper;
