import React from 'react';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      <span className={status ? styles.isOnline : styles.isOfffline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
