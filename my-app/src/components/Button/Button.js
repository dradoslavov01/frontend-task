import React from 'react'

import styles from './Button.module.scss';

const Button = ({ classNames, text, onClick }) => {
  return (
    <button className={[styles.button, ...classNames].join(' ')} onClick={onClick}>{text}</button>
  )
}

export default Button;
