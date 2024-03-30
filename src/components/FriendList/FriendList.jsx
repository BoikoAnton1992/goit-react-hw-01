import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friends }) {
  return (
    <div className={css.mainContainer}>
      {friends.map(friend => (
        <div className={css.avatarContainer} key={friend.id}>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <p className={css.friendName}>{friend.name}</p>
          <p
            className={clsx({
              [css.online]: friend.isOnline,
              [css.offline]: !friend.isOnline,
            })}
          >
            {friend.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      ))}
    </div>
  );
}
