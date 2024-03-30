import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '../Data/userData.json';
import friendListData from '../Data/friedListData.json';
import TransactionData from '../Data/TransactionData.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendListData.friends} />
      <TransactionHistory items={TransactionData.transactions} />
    </>
  );
}
