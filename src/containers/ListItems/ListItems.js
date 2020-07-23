import React from 'react';
import styles from './ListItems.module.scss';
import TeamItem from '../../components/ListItems/TeamItem';
import { connect } from 'react-redux';

class ListItems extends React.Component {
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

//jezeli zmienia sie id w propsach to uruchamia akcje i pobiera wedlug id druzyny

const mapStateToProps = (state) => ({
  items: state.listItemsReducer.items,
  itemsType: state.listItemsReducer.itemsType,
});

export default connect(mapStateToProps)(ListItems);
