import {
  FormerTeam,
  GetFormerTeamsResponse,
  GetHonoursResponse,
  Honour,
  ObjectizedFormerTeam,
  ObjectizedHonour,
} from '../../models/foottyAPI/foottyAPI-player.store.model';

const getFormerTeams = (
  getFormerTeamsResponse: GetFormerTeamsResponse
): { [formerTeamId: string]: ObjectizedFormerTeam } => {
  const formerTeams: { [formerTeamId: string]: ObjectizedFormerTeam } = getFormerTeamsResponse.formerteams.reduce(
    (acc: { [formerTeamId: string]: ObjectizedFormerTeam }, formerTeam: FormerTeam) => {
      return {
        ...acc,
        [formerTeam.id]: {
          playerId: formerTeam.idPlayer,
          teamId: formerTeam.idFormerTeam,
          strFormerTeam: formerTeam.strFormerTeam,
          strTeamBadge: formerTeam.strTeamBadge ? formerTeam.strTeamBadge : null,
          strJoined: formerTeam.strJoined,
          strDeparted: formerTeam.strDeparted,
        },
      };
    },
    {}
  );

  return formerTeams;
};

const getHonours = (getHonoursResponse: GetHonoursResponse): { [honourId: string]: ObjectizedHonour } => {
  const honours: { [honourId: string]: ObjectizedHonour } = getHonoursResponse.honors.reduce(
    (acc: { [honourId: string]: ObjectizedHonour }, honour: Honour) => {
      return {
        ...acc,
        [honour.id]: {
          playerId: honour.idPlayer,
          teamId: honour.idTeam,
          strPlayer: honour.strPlayer,
          strTeam: honour.strTeam,
          strHonour: honour.strHonour,
          strSeason: honour.strSeason,
        },
      };
    },
    {}
  );

  return honours;
};

const foottyAPIPlayerStoreHelper = {
  getFormerTeams,
  getHonours,
};

export default foottyAPIPlayerStoreHelper;
