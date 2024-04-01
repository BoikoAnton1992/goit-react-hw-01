import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css.mainContainer}>
      {friends.map(friend => (
        <li key={friend.id}>
          <div className={css.avatarContainer}>
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
        </li>
      ))}
    </ul>
  );
}
