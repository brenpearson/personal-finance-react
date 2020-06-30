import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryPie, VictoryLabel, VictoryAxis, VictoryContainer } from 'victory';
import './App.css';
import { Account, getAccount } from './api/Account';
import { ProfileHeader } from './ui/ProfileHeader';
import {TransactionList } from './ui/TransactionList';
import { green, red, purple, deepPurple, grey } from '@material-ui/core/colors';
import { capitalize } from '@material-ui/core';

type AppState = { 
  account: Account;
};

export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)
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
              <ProfileHeader account={this.state.account} />
            </div>

            <div className="column">
              <div className="Container">
                <div className="row">
                  <div className="column">
                    <div className="ContainerTitle">Activity</div>
                      <VictoryChart
                        height={500}
                        width={700}
                        padding={80}
                        domainPadding={20} 
                        animate={{
                          duration: 1000
                        }}
                        theme={VictoryTheme.material}>
                        <VictoryAxis
                          dependentAxis={true}
                          tickFormat={(t) => '$' + t}
                          tickLabelComponent={<VictoryLabel style={{fontSize: '24px'}} />} />
                        <VictoryAxis
                          tickLabelComponent={<VictoryLabel style={{fontSize: '24px'}} />} />
                        <VictoryLine 
                          data={this.state.account.overview.income}
                          
                          style={{
                            data: {
                              stroke: green[600],
                              strokeWidth: 5
                            }
                          }}
                          events={[{
                            target: "data",
                            eventHandlers: {
                              onMouseOver: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: ({ style }) => {
                                      return {style: { strokeWidth: 8, stroke: green[600] }};
                                    }
                                  }, {
                                    target: "labels",
                                    mutation: ({ style }) => {
                                      return {style: { 
                                        fontWeight: 500,
                                        fontSize: 12
                                      }};
                                    }
                                  }
                                ];
                              },
                              onMouseLeave: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: ({ style }) => {
                                      return null;
                                    }
                                  }, {
                                    target: "labels",
                                    mutation: ({ style }) => {
                                      return null;
                                    }
                                  }
                                ];
                              }
                            }
                          }]}
                          y={(d) => d.value / 100}
                          x="month" />
                        <VictoryLine 
                          data={this.state.account.overview.expenses}
                          style={{
                            data: {
                              stroke: red[400],
                              strokeWidth: 5
                            }
                          }}
                          y={(d) => d.value / 100}
                          events={[{
                            target: "data",
                            eventHandlers: {
                              onMouseOver: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: ({ style }) => {
                                      return {style: { strokeWidth: 7, stroke: red[400] }};
                                    }
                                  }, {
                                    target: "labels",
                                    mutation: ({ style }) => {
                                      return {style: { 
                                        fontWeight: 500,
                                        fontSize: 12
                                      }};
                                    }
                                  }
                                ];
                              },
                              onMouseLeave: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: ({ style }) => {
                                      return null;
                                    }
                                  }, {
                                    target: "labels",
                                    mutation: ({ style }) => {
                                      return null;
                                    }
                                  }
                                ];
                              }
                            }
                          }]}
                          x="month" />
                      </VictoryChart>
                  </div>
                  <div className="column">
                    <div className="ContainerTitle">Transactions</div>
                    <TransactionList account={this.state.account} />
                  </div>
                </div>
                <div className="row">
                  <div className="column" style={{paddingLeft: '0'}}>
                    <div className="Container" style={{background: 'linear-gradient(45deg, #d1c4e9 30%, #ede7f6 90%)'}}>
                      <div style={{width: '45%', height: '25%', alignContent: 'center'}}>
                      <VictoryPie 
                        theme={VictoryTheme.material}
                        data={this.state.account.overview.expense_split}
                        colorScale={["#ce93d8", "#80cbc4", "#9fa8da" ]}
                        animate={{ duration: 0 }}
                        containerComponent={<VictoryContainer responsive={true}/>}
                        style={{labels: {
                          fontSize: 10,
                          color: grey[100]
                        }}}
                        events={[{
                          target: "data",
                          eventHandlers: {
                            onMouseOver: () => {
                              return [
                                {
                                  target: "data",
                                  mutation: ({ style }) => {
                                    return {style: { fill: "#7e57c2" }};
                                  }
                                }, {
                                  target: "labels",
                                  mutation: ({ style }) => {
                                    return {style: { 
                                      fontWeight: 500,
                                      fontSize: 12
                                    }};
                                  }
                                }
                              ];
                            },
                            onMouseLeave: () => {
                              return [
                                {
                                  target: "data",
                                  mutation: ({ style }) => {
                                    return null;
                                  }
                                }, {
                                  target: "labels",
                                  mutation: ({ style }) => {
                                    return null;
                                  }
                                }
                              ];
                            }
                          }
                        }]}
                        height={200}
                        width={200}
                        x={(d) => capitalize(d.category)}
                        y="value" />
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