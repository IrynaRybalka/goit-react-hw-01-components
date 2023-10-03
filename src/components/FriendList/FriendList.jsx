import React from 'react';
import { ContainerList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ContainerList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ContainerList>
  );
};
