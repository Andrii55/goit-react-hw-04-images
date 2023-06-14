import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handelClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose('');
    }
  };

  handleKey = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClose('');
    }
  };

  render() {
    return createPortal(
      <div
        onClick={this.handelClick}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: '1100',
        }}
      >
        <img width="50%" src={this.props.largeImageURL} alt="name" />
      </div>,
      modalRoot
    );
  }
}
