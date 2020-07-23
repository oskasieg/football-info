import React, { Component } from 'react';
import styles from '../../containers/TeamInfo/TeamInfo.module.scss';

class Footballers extends Component {
  render() {
    const { squad } = this.props;

    let goalkeepers;
    if (squad) goalkeepers = squad.filter((footballer) => footballer.position === 'Goalkeeper');

    console.log(goalkeepers);

    return (
      <div className={styles.TeamInfo__panel}>
        <div className={styles.squad}>
          <p className={styles.title}>Squad</p>
          <p className={styles.subtitle} style={{ color: 'yellow' }}>
            Goalkeepers
          </p>
          <div className={styles.section}>
            {goalkeepers &&
              goalkeepers.map((player) => (
                <div key={player.id} className={styles.section__element}>
                  <div className={styles.circle}>GK</div>
                  <p className={styles.text}>{player.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Footballers;
