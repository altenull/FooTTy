import { GetAllPlayersInTeamPayload } from '../../../services/models/foottyAPI-team.service.model';
import { ActionType } from '../saga/saga.model';
import { SocialUrls } from '../shared/shared.model';

export interface FoottyAPITeamState {
  allPlayersInTeam: { [playerId: string]: ObjectizedPlayerInTeam } | null;
  allPlayersInTeamAPIStatus: {
    isGetAllPlayersInTeamLoading: boolean;
    isGetAllPlayersInTeamLoaded: boolean;
    getAllPlayersInTeamError: string | null;
  };
}

// Redux-Saga
export interface GetAllPlayersInTeamAction extends ActionType {
  payload: GetAllPlayersInTeamPayload;
}

export interface Player {
  idPlayer: string;
  idTeam: string | null;
  idSoccerXML: string;
  idPlayerManager: string | null;
  strNationality: string;
  strPlayer: string;
  strTeam: string | null;
  strSport: string | null;
  intSoccerXMLTeamID: string | null;
  dateBorn: string | null;
  dateSigned: string | null;
  strSigning: string | null;
  strWage: string | null;
  strBirthLocation: string | null;
  strDescriptionEN: string | null;
  strDescriptionDE: string | null;
  strDescriptionFR: string | null;
  strDescriptionCN: string | null;
  strDescriptionIT: string | null;
  strDescriptionJP: string | null;
  strDescriptionRU: string | null;
  strDescriptionES: string | null;
  strDescriptionPT: string | null;
  strDescriptionSE: string | null;
  strDescriptionNL: string | null;
  strDescriptionHU: string | null;
  strDescriptionNO: string | null;
  strDescriptionIL: string | null;
  strDescriptionPL: string | null;
  strGender: string | null;
  strPosition: string | null;
  strCollege: string | null;
  strFacebook: string | null;
  strWebsite: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
  strYoutube: string | null;
  strHeight: string | null;
  strWeight: string | null;
  intLoved: string | null;
  strThumb: string | null;
  strCutout: string | null;
  strBanner: string | null;
  strFanart1: string | null;
  strFanart2: string | null;
  strFanart3: string | null;
  strFanart4: string | null;
  strLocked: string;
}
export interface GetAllPlayersInTeamResponse {
  player: Player[];
}
export interface ObjectizedPlayerInTeam {
  idTeam: string | null;
  idPlayerManager: string | null;
  strNationality: string;
  strPlayer: string;
  dateBorn: string | null;
  strPosition: string | null;
  strHeight: string | null;
  strWeight: string | null;
  socialUrls: SocialUrls;
  thumbUrl: string | null;
}
