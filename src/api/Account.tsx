import { Transaction } from './Transaction';
import { Overview } from './Overview';

export interface Account {
    id: number;
    first_name: string;
    family_name: string;
    avatar: string;
    balance: number;
    savings: number;
    transactions: Transaction[];
    overview: Overview;
}

export function getAccount(id: number): Promise<Account> {
    return fetch("https://personal-finance-python-bren.herokuapp.com/accounts/" + id)
    .then(res => res.json())
    .then(res => {
        return res as Account
    })
}