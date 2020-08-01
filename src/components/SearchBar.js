import React from 'react';
import styles from './SearchBar.module.scss';
import { connect } from 'react-redux';
import { getTeamsFromCompetition } from '../containers/ListItems/actions';

class SearchBar extends React.Component {
  state = {
    searchType: 'country',
  };

  handleCompetitionClick = (e) => {
    this.setState({
      competitionId: e.currentTarget.value,
    });
  };

  handleTypeClick = (e) => {
    this.setState({
      searchType: e.currentTarget.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.competitionId) return;
    if (this.state.searchType === 'country') this.props.handleSubmit(this.state.competitionId);
  };

  render() {
    const { searchType } = this.state;

    const { competitions } = this.props;

    return (
      <form onSubmit={(e) => this.onSubmit(e)} className={styles.SearchBar}>
        <h3 className={styles.SearchBar__title}>Select competition and type to search data.</h3>

        <select className={styles.SearchBar__input} onChange={this.handleCompetitionClick}>
          <option>Select competition...</option>
          {competitions &&
            competitions.map((competition) => (
              <option key={competition.id} value={competition.id}>
                {competition.area.name} - {competition.name}
              </option>
            ))}
        </select>

        <select className={styles.SearchBar__select} value={searchType} onChange={this.handleTypeClick}>
          <option value='country'>Teams</option>
          <option value='other'>Other</option>
        </select>

        <button className={styles.SearchBar__button} type='submit'>
          Find
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  competitions: state.listItemsReducer.allCompetitions,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (competitionId) => dispatch(getTeamsFromCompetition(competitionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
