import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkTo: string;
  alias: string;
  badgeGrey: string;
  displayName: string;
  fullName: string;
}

const StLeagueSelectorLogo = styled.img`
  opacity: 0.5;
  transform: scale(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
`;

const StLeagueSelectorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #495057;
  text-transform: uppercase;
  transition: color 0.3s ease-out;
`;

const StLeagueSelector = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  & + & {
    margin-top: 1em;
  }
  &:hover {
    ${StLeagueSelectorLogo} {
      opacity: 0.6;
      transform: scale(1.1);
    }
    ${StLeagueSelectorTitle} {
      color: #868e96;
    }
  }
`;

class LeagueSelector extends React.Component<Props> {
  render() {
    const { linkTo, badgeGrey, displayName, fullName } = this.props;
    // const { linkTo, alias, badgeGrey, displayName, fullName } = this.props;
    // const hoveredLogoMap = {
    //   PL: '../../../assets/images/BL-badge.png',
    //   LL: '../../../assets/images/LL-badge.png',
    //   BL: '../../../assets/images/BL-badge.png',
    // };

    // content: ${(props) => props.hoveredLogo};
    // <StLeagueSelector to={linkTo} hoveredLogo={hoveredLogoMap[alias]}></StLeagueSelector>

    return (
      <StLeagueSelector to={linkTo}>
        <StLeagueSelectorLogo src={badgeGrey} alt={fullName} />
        <StLeagueSelectorTitle>{displayName}</StLeagueSelectorTitle>
      </StLeagueSelector>
    );
  }
}

export default LeagueSelector;
