import React from 'react';
import styles from './ListItems.module.scss';
import TeamItem from '../../components/TeamItem';
import { connect } from 'react-redux';

class ListItems extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.ListItems}>
        <TeamItem />
        <TeamItem />
        <TeamItem />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: state.listItemsReducer.items,
});

export default connect(mapStateToProps)(ListItems);
