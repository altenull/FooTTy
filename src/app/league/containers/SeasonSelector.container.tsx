import * as React from 'react';
import { connect } from 'react-redux';

import { LeagueActions } from '../../../store/actionCreators';
import { SelectSeasonPayload } from '../../../store/models/league/league.store.model';
import { RootState } from '../../../store/modules';
import SeasonSelector from '../components/SeasonSelector';

interface Props {
  leagueId: string;
  selectedSeason: string;
  seasons: string[];
}

interface States {
  isExpanded: boolean;
}

class SeasonSelectorContainer extends React.Component<Props, States> {
  state = {
    isExpanded: false,
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<States>, nextContext: any): boolean {
    return (
      this.props.leagueId !== nextProps.leagueId ||
      this.props.selectedSeason !== nextProps.selectedSeason ||
      this.state.isExpanded !== nextState.isExpanded
    );
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>, snapshot?: any): void {
    // const { leagueId, selectedSeason } = this.props;
    const { selectedSeason } = this.props;

    if (!!selectedSeason && prevProps.selectedSeason !== selectedSeason) {
      // const getLeagueTablePayload: GetLeagueTablePayload = {
      //   leagueId,
      //   selectedSeason,
      // };
      // FoottyAPIActions.getLeagueTable(getLeagueTablePayload);
    }
  }

  handleExpandability = (): void => {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    });
  };

  handleSelectSeason = (selectedSeason: string): void => {
    const selectSeasonPayload: SelectSeasonPayload = {
      selectedSeason,
    };
    LeagueActions.selectSeason(selectSeasonPayload);

    // TODO: Request League Table & setState(ixExpanded: false)
    this.setState({
      isExpanded: false,
    });
  };

  render() {
    const { selectedSeason, seasons } = this.props;
    const { isExpanded } = this.state;
    const { handleExpandability, handleSelectSeason } = this;

    const selectableSeasons: string[] = seasons.filter((season: string) => season !== selectedSeason);

    return (
      <SeasonSelector
        isExpanded={isExpanded}
        selectedSeason={selectedSeason}
        selectableSeasons={selectableSeasons}
        onExpandability={handleExpandability}
        onSelectSeason={handleSelectSeason}
      />
    );
  }
}

export default connect(
  (state: RootState) => ({
    selectedSeason: state.league.selectedSeason,
    seasons: state.foottyAPI.foottyAPILeague.seasons,
  }),
  () => ({})
)(SeasonSelectorContainer);
