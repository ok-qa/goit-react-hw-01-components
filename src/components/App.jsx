
import { User } from './User/User.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendsList } from './FriendsList/FriendsList.jsx';
import { TransactionsHistory } from './TransactionsHistory/Transactions.jsx';

import user from '../data/user.json';
import data from '../data/statistics.json';
import friends from '../data/friendsList.json';
import transactions from '../data/transactions.json';


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
      <FriendsList friends={friends} />;
      <TransactionsHistory items={transactions} />;
    </>
  );
};
