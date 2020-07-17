import React from 'react';
import logo from '../assets/fcb.jpg';
import styles from './TeamItem.module.scss';
import { Link } from 'react-router-dom';

class TeamItem extends React.Component {
  render() {
    return (
      <div className={styles.TeamItem}>
        <img className={styles.TeamItem__logo} src={logo} alt='logo' />
        <div className={styles.TeamItem__data}>
          <div className={styles.TeamItem__title}>
            <b>Name: </b>FC Barcelona
          </div>
          <div className={styles.TeamItem__row}>
            <b>Country:</b> Spain
          </div>
          <div className={styles.TeamItem__row}>
            <b>Created at:</b> 1900
          </div>
        </div>
        <button className={styles.TeamItem__button}>
          <Link className={styles.clearLink} to='/team/fcb'>
            See more
          </Link>
        </button>
      </div>
    );
  }
}

export default TeamItem;
