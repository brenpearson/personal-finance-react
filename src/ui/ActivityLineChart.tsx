import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory';
import { green, red } from '@material-ui/core/colors';
import { Account } from '../api/Account'

type AccountProps = {
    account: Account;
}

/**
 * ActivityLineChart
 * A Line Chart to display an account income/expenses lines over time
 */
export class ActivityLineChart extends React.Component<AccountProps, any> {
    render() {
        return (
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
                    data={this.props.account.overview.income}
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
                                return [{
                                    target: "data",
                                    mutation: () => {
                                        return { style: { 
                                            strokeWidth: 8,
                                            stroke: green[600]
                                        }, labels: {
                                            label: "Yo"
                                        }};
                                    }
                                }, {
                                    target: "labels",
                                    mutation: () => {
                                    return { style: { 
                                        fontWeight: 500,
                                        fontSize: 12
                                    }};
                                    }
                                }];
                            },
                            onMouseLeave: () => {
                                return [
                                {
                                    target: "data",
                                    mutation: () => {
                                        return null;
                                    }
                                }, {
                                    target: "labels",
                                    mutation: () => {
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
                    data={this.props.account.overview.expenses}
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
        );
    }
}