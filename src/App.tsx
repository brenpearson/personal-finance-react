import React from 'react';
import './App.css';
import { Account, getAccount } from './api/Account';
import { ProfileHeader } from './ui/ProfileHeader';
import { TransactionList } from './ui/TransactionList';
import { ActivityLineChart } from './ui/ActivityLineChart';
import { ExpensesPieChart } from './ui/ExpensesPieChart';
import ReactPlayer from 'react-player';

type AppState = { 
  account: Account;
};

export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)

    // Set the placeholder empty account
    this.state = {
      account: {
        id: 0,
        first_name: '',
        family_name: '',
        avatar: '',
        balance: 0,
        savings: 0,
        transactions: [],
        overview: {
          expenses: [],
          income: [],
          expense_split: []
        }
      }
    }
  }

  componentDidMount() {
    if (this.state.account.id === 0) {
      // Get account #1 on app first launch
      getAccount(1).then( acc => {
        this.setState({
          account: acc
        })
      });
    } 
  }
  
  render() {    
    return (
      <div className="App">
        <body>
          <div className="row">
            <div className="ProfileBar">
              <ProfileHeader account={this.state.account} switchAccount= {() => {
                // Here in reality we would either log out or show an account picker for logged in
                // accounts, but I'm just switching between 2 pre-configured accounts to test out
                // the data binding with react etc.

                // Toggle the account id
                var newId = this.state.account.id === 1 ? 2 : 1;

                // Get the new account and update the state
                getAccount(newId).then( acc => {
                  this.setState({
                    account: acc
                  })
                })
              }} />
            </div>

            <div className="column"><div></div>
              <div className="row" style={{width: '100%'}}>
                <div className="Container" style={{width: '100%'}}>
                  <div className="row">
                    <div className="column" style={{ width:'100%'}}>
                      <div className="ContainerTitle">Activity</div>
                      <ActivityLineChart account={this.state.account} />
                    </div>
                    <div className="column">
                      <div className="ContainerTitle">Transactions</div>
                      <TransactionList account={this.state.account} />
                    </div>
                  </div>
                </div>
                <div className="row" style={{width: '100%'}}>
                    <div className="Container" style={{width: '100%', background: 'linear-gradient(45deg, #d1c4e9 30%, #ede7f6 90%)'}}>
                      <div className="row">
                        <div className="column">
                          <div className="ContainerTitle">Expense Breakdown</div>
                          <ExpensesPieChart account={this.state.account} />
                        </div>
                        <div className="column">
                          <div className="ContainerTitle">Finance Tips</div>
                          <ReactPlayer url="https://youtu.be/7Kz4GG2EJMY" width={400} height={300} style={{
                             alignContent: 'center',
                             padding: '1.5em',
                             borderRadius: '1em'}} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </body>
      </div>
    );
  }
}