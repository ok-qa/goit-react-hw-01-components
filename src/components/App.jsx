import user from 'components/user/user.json';
import { User } from 'components/user/user.jsx';
import data from './user-data/data';
import { Statistics } from './user-data/data.jsx';
import friends from './user-friends/friends.json';
import { FriendList } from './user-friends/friends.jsx';
import transactions from './user-transactions/transactions.json';
import { TransactionsHistory } from './user-transactions/transactions.jsx';

export const App = () => {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionsHistory items={transactions} />;
    </>
  );
};
