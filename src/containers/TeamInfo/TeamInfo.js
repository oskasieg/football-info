import React from 'react';
import { getCurrentTeam } from './actions';
import { connect } from 'react-redux';
import styles from './TeamInfo.module.scss';
import Informations from '../../components/TeamInfo/Informations';
import Logo from '../../components/TeamInfo/Logo';
import Footballers from '../../components/TeamInfo/Footballers';
import Contact from '../../components/TeamInfo/Contact';

class TeamInfo extends React.Component {
  state = {
    menuButtonActive: 1,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTeam(id);
  }

  setButtonActive = (id) => {
    this.setState({ menuButtonActive: id });
  };

  render() {
    const { team } = this.props;

    const { menuButtonActive } = this.state;

    return (
      <div className={styles.TeamInfo}>
        <Logo team={team} />

        <div className={styles.TeamInfo__panel}>
          <button
            onClick={() => this.setButtonActive(1)}
            className={menuButtonActive === 1 ? `${styles.menuButton} ${styles.menuButton__active}` : styles.menuButton}
          >
            Info
          </button>
          <button
            onClick={() => this.setButtonActive(2)}
            className={menuButtonActive === 2 ? `${styles.menuButton} ${styles.menuButton__active}` : styles.menuButton}
          >
            Team
          </button>
          <button
            onClick={() => this.setButtonActive(3)}
            className={menuButtonActive === 3 ? `${styles.menuButton} ${styles.menuButton__active}` : styles.menuButton}
          >
            Contact
          </button>
          {menuButtonActive === 1 && <Informations team={team} />}
          {menuButtonActive === 2 && <Footballers squad={team.squad} />}
          {menuButtonActive === 3 && <Contact team={team} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  team: state.teamInfoReducer.team,
});

const mapDispatchToProps = (dispatch) => ({
  getTeam: (id) => dispatch(getCurrentTeam(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo);
