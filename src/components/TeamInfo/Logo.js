import React, { Component } from 'react';
import styles from '../../containers/TeamInfo/TeamInfo.module.scss';
import splitDate from '../../lib/splitDate';
import defaultLogo from '../../assets/random_team.png';

class Logo extends Component {
  render() {
    const { team } = this.props;

    let lastUpdated;
    if (team.lastUpdated) {
      lastUpdated = splitDate(team.lastUpdated);
    }

    return (
      <div className={styles.TeamInfo__logo}>
        <p className={styles.title}>{team.name}</p>
        <p className={styles.subtitle}>{team.tla}</p>
        <img className={styles.logo} src={team.crestUrl ? team.crestUrl : defaultLogo} alt='logo' />
        <p className={styles.subtitle}>
          Last update: {lastUpdated && lastUpdated.time} {lastUpdated && lastUpdated.date}
        </p>
      </div>
    );
  }
}

export default Logo;
