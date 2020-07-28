import React from 'react';
import styles from './ListItems.module.scss';
import TeamItem from '../../components/ListItems/TeamItem';
import { connect } from 'react-redux';
import { clearTeams } from './actions';

class ListItems extends React.Component {
  componentWillMount() {
    const { clearTeams } = this.props;
    clearTeams();
  }

  render() {
    const { itemsType, items } = this.props;

    return (
      <div className={styles.ListItems}>
        {!items.length && <h1 style={{ color: 'white' }}> No results!</h1>}
        {itemsType === 'teams' && (
          <>
            {items.map((item) => (
              <TeamItem key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.listItemsReducer.items,
  itemsType: state.listItemsReducer.itemsType,
});

const mapDispatchToProps = (dispatch) => ({
  clearTeams: () => dispatch(clearTeams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
