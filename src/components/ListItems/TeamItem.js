import React from 'react';
import logo from '../../assets/random_team.png';
import styles from './TeamItem.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TeamItem extends React.Component {
  render() {
    const { id, name, crestUrl, founded, competition, area } = this.props;

    return (
      <div className={styles.TeamItem}>
        <img className={styles.TeamItem__logo} src={crestUrl ? crestUrl : logo} alt='logo' />
        <div className={styles.TeamItem__data}>
          <div className={styles.TeamItem__title}>
            <b>Name: </b>
            {name}
          </div>
          <div className={styles.TeamItem__row}>
            <b>Country:</b> {area.name ? area.name : competition.area.name}
          </div>
          <div className={styles.TeamItem__row}>
            <b>Created at:</b> {founded}
          </div>
        </div>
        <Link className={styles.TeamItem__button} to={`/team/${id}`}>
          See more
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  competition: state.listItemsReducer.competitionInfo,
});

export default connect(mapStateToProps)(TeamItem);
