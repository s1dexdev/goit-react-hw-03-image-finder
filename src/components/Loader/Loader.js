import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class GalleryLoader extends Component {
  //other logic
  render() {
    return (
      <div className={styles.wrapper}>
        <Loader type="ThreeDots" color="#d40d0d" height={90} width={90} />
      </div>
    );
  }
}
