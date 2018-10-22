import React, { Component } from 'react';
import logo from './logo.svg';
import classNames from 'classnames/bind';
import styles from './App.module.css';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className={cx('box', {
        blue:isBlue
      })}>
        <div className={cx('box-inside')}></div>
      </div>
    );
  }
}

export default App;
