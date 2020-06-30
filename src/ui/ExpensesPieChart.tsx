import { grey } from '@material-ui/core/colors';
import { capitalize } from '@material-ui/core';
import { VictoryTheme, VictoryPie } from 'victory';
import React from 'react';
import { Account } from '../api/Account';


type AccountProps = {
    account: Account;
}

/**
 * ExpensesPieChart
 * A Pie Chart UI component to display an account expense breakdown between categories
 */
export class ExpensesPieChart extends React.Component<AccountProps, any> {
    render() {
        return (
            <VictoryPie 
                theme={VictoryTheme.material}
                data={this.props.account.overview.expense_split}
                colorScale={["#ce93d8", "#80cbc4", "#9fa8da" ]}
                animate={{ duration: 1000 }}
                style={{labels: {
                    fontSize: 9,
                    color: grey[100]
                }}}
                events={[{
                    target: "data",
                    eventHandlers: {
                        onMouseOver: () => {
                            return [
                            {
                                target: "data",
                                mutation: () => {
                                    return {style: { fill: "#7e57c2" }};
                                }
                            }, {
                                target: "labels",
                                mutation: () => {
                                return { 
                                    style: { 
                                        fontWeight: 500,
                                        fontSize: 10
                                    }
                                };
                                },
                            }
                            ];
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
                height={190}
                width={190}
                x={(d) => capitalize(d.category)}
                y="value" />
        );
    }
}