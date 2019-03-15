import { leagueContents } from './league.content';

export interface FoottyContents {
  en: object;
  ko: object;
}

export const foottyContents: FoottyContents = {
  en: {
    league: leagueContents.en,
  },
  ko: {
    league: leagueContents.ko,
  },
};
