import React, { Component } from 'react';
import styles from './FootballerInfo.module.scss';
import { getPlayerAction } from './actions';
import { connect } from 'react-redux';
import avatar from '../../assets/random_avatar.png';

class FootballerInfo extends Component {
  componentDidMount() {
    this.props.getFootballer(this.props.match.params.id);
  }

  render() {
    const { footballer } = this.props;
    console.log(this.props.footballer);
    return (
      <div className={styles.FootballerInfo}>
        <div className={styles.FootballerInfo__left}>
          <img className={styles.avatar} src={avatar} alt='avatar' />
          <p className={styles.row}> {footballer.name} </p>
        </div>
        <div className={styles.FootballerInfo__right}>
          <p className={styles.title}>Informations</p>
          <p className={styles.row__left}>Date of birth:</p>
          <p className={styles.row__right}>{footballer.dateOfBirth}</p>
          <p className={styles.row__left}>Country of birth:</p>
          <p className={styles.row__right}>{footballer.countryOfBirth}</p>
          <p className={styles.row__left}>Nationality:</p>
          <p className={styles.row__right}>{footballer.nationality}</p>
          <p className={styles.row__left}>Position:</p>
          <p className={styles.row__right}>{footballer.position ? footballer.position : '---'}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  footballer: state.footballerInfoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getFootballer: (id) => dispatch(getPlayerAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FootballerInfo);
