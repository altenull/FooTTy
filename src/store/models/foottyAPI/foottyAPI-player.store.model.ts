import { GetFormerTeamsPayload, GetHonoursPayload } from '../../../services/models/foottyAPI-player.service.model';
import { ActionType } from '../saga/saga.model';

export interface FoottyAPIPlayerState {
  formerTeams: { [formerTeamId: string]: ObjectizedFormerTeam } | null;
  formerTeamsAPIStatus: {
    isGetFormerTeamsLoading: boolean;
    isGetFormerTeamsLoaded: boolean;
    getFormerTeamsError: string | null;
  };
  honours: { [honourId: string]: ObjectizedHonour } | null;
  honoursAPIStatus: {
    isGetHonoursLoading: boolean;
    isGetHonoursLoaded: boolean;
    getHonoursError: string | null;
  };
}

// Redux-Saga
export interface GetFormerTeamsAction extends ActionType {
  payload: GetFormerTeamsPayload;
}
export interface GetHonoursAction extends ActionType {
  payload: GetHonoursPayload;
}

export interface FormerTeam {
  id: string;
  idPlayer: string;
  idFormerTeam: string;
  strSport: string;
  strPlayer: string;
  strFormerTeam: string;
  strTeamBadge: string | null;
  strJoined: string;
  strDeparted: string;
}

export interface GetFormerTeamsResponse {
  formerteams: FormerTeam[];
}

export interface ObjectizedFormerTeam {
  playerId: string;
  teamId: string;
  strFormerTeam: string;
  strTeamBadge: string | null;
  strJoined: string;
  strDeparted: string;
}

export interface Honour {
  id: string;
  idPlayer: string;
  idTeam: string;
  strSport: string;
  strPlayer: string;
  strTeam: string;
  strHonour: string;
  strSeason: string;
}

export interface GetHonoursResponse {
  honors: Honour[];
}

export interface ObjectizedHonour {
  playerId: string;
  teamId: string;
  strPlayer: string;
  strTeam: string;
  strHonour: string;
  strSeason: string;
}
