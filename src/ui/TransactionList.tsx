import React from 'react';
import '../App.css';
import { Account } from '../api/Account';
import { grey, green } from '@material-ui/core/colors';

export type TransactionsProps = { 
    account: Account;
};

export class TransactionList extends React.Component<TransactionsProps, any> {
    render() {
        let transactions = []
        for (var i = 0; i < this.props.account.transactions.length; i++) {
            let transaction = this.props.account.transactions[i];
            let amountColor = (transaction.value >= 0) ? green[600] : grey[900];
            transactions.push(
                <div className="TransactionItem">
                    <div className="row" style={{width: '100%'}}>
                        <div className="column">
                            <div className="TransactionDescription">{transaction.description}</div>
                            <div className="TransactionCategory">{transaction.category}</div>
                        </div>
                        <div className="column" style={{paddingRight: '3em', justifyContent: 'center'}}>
                            <div className="TransactionValue" style={{color: amountColor}}>${transaction.value / 100}</div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
        <div className="TransactionList">
            { transactions }
        </div>
        );
    }
}