import React from 'react';
import styles from './SearchBar.module.scss';

class SearchBar extends React.Component {
  render() {
    return (
      <div className={styles.SearchBar}>
        <h3 className={styles.SearchBar__title}>Check category and type keyword to search.</h3>
        <input className={styles.SearchBar__input} type='text' placeholder='Type here...' />
        <select className={styles.SearchBar__select}>
          <option value='team'>Team</option>
        </select>
        <button className={styles.SearchBar__button} type='submit'>
          Find
        </button>
      </div>
    );
  }
}

export default SearchBar;
