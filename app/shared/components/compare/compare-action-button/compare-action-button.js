import React, { Component } from 'react';
import { Button } from 'self-service-components';
import ISvg from 'react-inlinesvg';
import styles from './compare-action-button.scss';

class CompareActionButton extends Component {
  componentWillMount() {
    this.eventListener = e => {
      if (this.props.shouldBindKeys !== false) {
        e.stopPropagation();
        e.preventDefault();
        if (e.keyCode === this.props.shortcutKey.charCodeAt(0)) {
          this.props.onClick(e)
        }
      }
    };

    document.addEventListener('keypress', this.eventListener)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.eventListener);
  }

  render() {
  const { title, iconSrc, shortcutKey, onClick } = this.props;

    return (
      <div>
        <Button onClick={onClick} className={this.props.className}>
          <div className={styles.title}>{title}</div>
          <div className={styles.icon}><ISvg src={iconSrc} /></div>
          <div className={styles.shortcut}>{`(${shortcutKey})`}</div>
        </Button>
      </div>
    )
  }
}

export default CompareActionButton;