import { Component } from 'react';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    return <div className={styles.spinner}></div>;
  }
}
