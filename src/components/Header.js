import React from 'react';
import styles from './Header.module.scss';
import Menu from './Menu';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <Menu />
      </div>
    );
  }
}

export default Header;
