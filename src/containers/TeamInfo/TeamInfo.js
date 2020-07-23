import React from 'react';
import { getCurrentTeam } from './actions';
import { connect } from 'react-redux';
import styles from './TeamInfo.module.scss';
import Informations from '../../components/TeamInfo/Informations';
import Logo from '../../components/TeamInfo/Logo';
import Footballers from '../../components/TeamInfo/Footballers';

class TeamInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getTeam(id);
  }

  render() {
    const { team } = this.props;

    return (
      <div className={styles.TeamInfo}>
        <Logo team={team} />
        <Informations team={team} />
        <Footballers squad={team.squad} />
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
