export interface GetLeagueDetailsPayload {
  leagueId: string;
}
export interface GetAllTeamsInLeaguePayload {
  league: string;
}
export interface GetLeagueSeasonsPayload {
  leagueId: string;
}
export interface GetNextEventsPayload {
  leagueId: string;
}
export interface GetLeagueTablePayload {
  leagueId: string;
  selectedSeason: string;
}
