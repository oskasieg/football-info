import React, { Component } from 'react';
import styles from '../../containers/TeamInfo/TeamInfo.module.scss';
import { Link } from 'react-router-dom';

class Footballers extends Component {
  render() {
    const { squad } = this.props;

    let coaches;
    if (squad) coaches = squad.filter((footballer) => footballer.role === 'COACH' || footballer.role === 'ASSISTANT_COACH');

    let goalkeepers;
    if (squad) goalkeepers = squad.filter((footballer) => footballer.position === 'Goalkeeper');

    let defenders;
    if (squad) defenders = squad.filter((footballer) => footballer.position === 'Defender');

    let midfielders;
    if (squad) midfielders = squad.filter((footballer) => footballer.position === 'Midfielder');

    let attackers;
    if (squad) attackers = squad.filter((footballer) => footballer.position === 'Attacker');

    return (
      <div className={styles.team}>
        <p className={styles.team__roleName}>Coaches</p>
        <div className={styles.team__players} style={{ justifyContent: 'center' }}>
          {coaches &&
            coaches.map((player) => (
              <div key={player.id} className={styles.player}>
                <Link to={`/footballer/${player.id}`} className={styles.player__avatar} style={{ backgroundColor: '#ff916e' }}>
                  C
                </Link>
                <p className={styles.player__name}>{player.name}</p>
              </div>
            ))}
        </div>
        <p className={styles.team__roleName}>Goalkeepers</p>
        <div className={styles.team__players}>
          {goalkeepers &&
            goalkeepers.map((player) => (
              <div key={player.id} className={styles.player}>
                <Link to={`/footballer/${player.id}`} className={styles.player__avatar} style={{ backgroundColor: '#e8e8aa' }}>
                  GK
                </Link>
                <p className={styles.player__name}>{player.name}</p>
              </div>
            ))}
        </div>
        <p className={styles.team__roleName}>Defenders</p>
        <div className={styles.team__players}>
          {defenders &&
            defenders.map((player) => (
              <div key={player.id} className={styles.player}>
                <Link to={`/footballer/${player.id}`} className={styles.player__avatar} style={{ backgroundColor: '#74b2b4' }}>
                  DEF
                </Link>
                <p className={styles.player__name}>{player.name}</p>
              </div>
            ))}
        </div>
        <p className={styles.team__roleName}>Midfielders</p>
        <div className={styles.team__players}>
          {midfielders &&
            midfielders.map((player) => (
              <div key={player.id} className={styles.player}>
                <Link to={`/footballer/${player.id}`} className={styles.player__avatar} style={{ backgroundColor: '#a4d967' }}>
                  MID
                </Link>
                <p className={styles.player__name}>{player.name}</p>
              </div>
            ))}
        </div>
        <p className={styles.team__roleName}>Strikers</p>
        <div className={styles.team__players}>
          {attackers &&
            attackers.map((player) => (
              <div key={player.id} className={styles.player}>
                <Link to={`/footballer/${player.id}`} className={styles.player__avatar} style={{ backgroundColor: '#ea5252' }}>
                  ST
                </Link>
                <p className={styles.player__name}>{player.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Footballers;
