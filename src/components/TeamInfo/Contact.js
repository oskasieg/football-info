import React from 'react';
import styles from '../../containers/TeamInfo/TeamInfo.module.scss';

class Contact extends React.Component {
  render() {
    const { team } = this.props;
    console.log(this.props);
    return (
      <div className={styles.informations}>
        <a href={team.website} className={styles.rightA}>
          {team.website}
        </a>
        <p className={styles.left}>Address:</p>
        <p className={styles.right}>{team.address ? team.address : '---'}</p>
        <p className={styles.left}>E-mail:</p>
        <p className={styles.right}>{team.email ? team.email : '---'}</p>
        <p className={styles.left}>Phone number:</p>
        <p className={styles.right}>{team.phone ? team.phone : '---'}</p>
      </div>
    );
  }
}

export default Contact;
