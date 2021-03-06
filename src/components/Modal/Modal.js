import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    urlImage: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const urlImage = this.props.image;

    return (
      <div className={styles.Overlay} onClick={this.handleClick}>
        <div className={styles.Modal}>
          <img className={styles.image} src={urlImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
