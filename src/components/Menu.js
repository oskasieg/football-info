import React from 'react';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  state = {
    menuVisible: false,
  };

  render() {
    const { menuVisible } = this.state;

    return (
      <div className={styles.Menu}>
        <div onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} className={styles.Menu__openButton}>
          <div className={styles.Menu__openButtonBars}></div>
        </div>
        <div className={menuVisible ? `${styles.Menu__container} ${styles.Menu__containerActive}` : styles.Menu__container}>
          <div onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} className={styles.closeButton}>
            <div className={styles.closeButton__bars}></div>
          </div>
          <div className={styles.options}>
            <div className={styles.title}>MENU</div>
            <Link onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} to='/' className={styles.option}>
              Home Page
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
