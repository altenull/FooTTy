import BLBadgeGrey from '../images/BL-badge-grey.png';
import BLBadge from '../images/BL-badge.png';
import LLBadgeGrey from '../images/LL-badge-grey.png';
import LLBadge from '../images/LL-badge.png';
import PLBadgeGrey from '../images/PL-badge-grey.png';
import PLBadge from '../images/PL-badge.png';
import SABadge from '../images/SA-badge.png';

export const leagueContents = {
  en: {
    leagueCollection: {
      4328: {
        alias: 'PL',
        name: 'premierleague',
        displayName: 'Premier League',
        fullName: 'English Premier League',
        country: 'England',
        badgeGrey: PLBadgeGrey,
        badge: PLBadge,
      },
      4335: {
        alias: 'LL',
        name: 'laliga',
        displayName: 'La Liga',
        fullName: 'Spanish La Liga',
        country: 'Spain',
        badgeGrey: LLBadgeGrey,
        badge: LLBadge,
      },
      4331: {
        alias: 'BL',
        name: 'bundesliga',
        displayName: 'Bundesliga',
        fullName: 'German Bundesliga',
        country: 'Germany',
        badgeGrey: BLBadgeGrey,
        badge: BLBadge,
      },
      4332: {
        alias: 'SA',
        name: 'seriea',
        displayName: 'Serie A',
        fullName: 'Italian Serie A',
        country: 'Italy',
        badgeGrey: SABadge,
        badge: SABadge,
      },
    },
    leagueTable: {
      position: 'Position',
      club: 'Club',
      played: 'Played',
      won: 'Won',
      drawn: 'Drawn',
      lost: 'Lost',
      goalsFor: 'GF',
      goalsAgainst: 'GA',
      goalDifference: 'GD',
      next: 'Next',
      points: 'Points',
    },
  },
  ko: {
    leagueCollection: {
      4328: {
        alias: 'PL',
        name: 'premierleague',
        displayName: '프리미어리그',
        fullName: 'English Premier League',
        country: 'England',
        badgeGrey: PLBadgeGrey,
        badge: PLBadge,
      },
      4335: {
        alias: 'LL',
        name: 'laliga',
        displayName: '라 리가',
        fullName: 'Spanish La Liga',
        country: 'Spain',
        badgeGrey: LLBadgeGrey,
        badge: LLBadge,
      },
      4331: {
        alias: 'BL',
        name: 'bundesliga',
        displayName: '분데스리가',
        fullName: 'German Bundesliga',
        country: 'Germany',
        badgeGrey: BLBadgeGrey,
        badge: BLBadge,
      },
      4332: {
        alias: 'SA',
        name: 'seriea',
        displayName: '세리에 A',
        fullName: 'Italian Serie A',
        country: 'Italy',
        badgeGrey: SABadge,
        badge: SABadge,
      },
    },
    leagueTable: {
      position: '순위',
      club: '클럽',
      played: '경기',
      won: '승',
      drawn: '무',
      lost: '패',
      goalsFor: '득',
      goalsAgainst: '실',
      goalDifference: '득실',
      next: '다음 경기',
      points: '승점',
    },
  },
};
