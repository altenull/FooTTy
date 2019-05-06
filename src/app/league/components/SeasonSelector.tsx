// TODO: Revise styles
import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

const itemWidth: string = '80px';

interface Props {
  isExpanded: boolean;
  selectedSeason: string;
  selectableSeasons: string[];
  onExpandability(): void;
  onSelectSeason(selectedSeason: string): void;
}

interface StSeasonSelectorProps {
  isExpanded: boolean;
}

interface StSeasonSelectorUlProps {
  isExpanded: boolean;
}

const StSeasonSelector = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  background-color: #ffffff;
  transform: ${(props: StSeasonSelectorProps) => (props.isExpanded ? `translateX(-${itemWidth})` : `translateX(0)`)};
`;

const StSeasonSelectorUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: ${(props: StSeasonSelectorUlProps) => (props.isExpanded ? '240px' : `${itemWidth}`)};
`;

const StSeasonSelectorItem = styled.li`
  width: ${itemWidth};
  height: 36px;
  display: block;
  font-size: 1.125rem;
  padding: 0.5em 1em;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;

class SeasonSelector extends Component<Props> {
  render() {
    const { isExpanded, selectedSeason, selectableSeasons, onExpandability, onSelectSeason } = this.props;

    // TODO: Handle empty selectedSeason by adding loading animation or others..?

    const displayedSeason: ReactNode = !isExpanded ? (
      <StSeasonSelectorItem onClick={() => onExpandability()}>{selectedSeason}</StSeasonSelectorItem>
    ) : (
      selectableSeasons.map((selectableSeason: string) => {
        return (
          <StSeasonSelectorItem key={selectableSeason} onClick={() => onSelectSeason(selectableSeason)}>
            {selectableSeason}
          </StSeasonSelectorItem>
        );
      })
    );

    return (
      <StSeasonSelector isExpanded={isExpanded}>
        <StSeasonSelectorUl isExpanded={isExpanded}>{displayedSeason}</StSeasonSelectorUl>
      </StSeasonSelector>
    );
  }
}

export default SeasonSelector;
