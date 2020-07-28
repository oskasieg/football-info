import React from 'react';
import styles from '../../containers/TeamInfo/TeamInfo.module.scss';

class Informations extends React.Component {
  render() {
    const { team } = this.props;

    return (
      <div className={styles.informations}>
        <p className={styles.left}>Short name:</p>
        <p className={styles.right}>{team.shortName}</p>
        <p className={styles.left}>Country:</p>
        <p className={styles.right}>{team.area ? team.area.name : ''}</p>
        <p className={styles.left}>Created at:</p>
        <p className={styles.right}>{team.founded}</p>
        <p className={styles.left}>Active competitions:</p>
        <p className={styles.right}>
          {team.activeCompetitions && team.activeCompetitions.length === 0 && <>---</>}
          {team.activeCompetitions &&
            team.activeCompetitions.map((competition, index) => {
              if (index === team.activeCompetitions.length - 1) return <span key={competition.id}>{competition.name} </span>;
              return <span key={competition.id}>{competition.name} / </span>;
            })}
        </p>
        <p className={styles.left}>Club colors:</p>
        <p className={styles.right}>{team.clubColors}</p>
        <p className={styles.left}>Stadium:</p>
        <p className={styles.right}>{team.venue ? <span>{team.venue}</span> : `---`}</p>
      </div>
    );
  }
}

export default Informations;
