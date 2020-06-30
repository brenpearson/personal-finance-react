import React from 'react';
import Avatar from 'react-avatar';
import '../App.css';
import { Account } from '../api/Account';
import { Button } from '@material-ui/core';

export type ProfileProps = { 
    account: Account;
};

export class ProfileHeader extends React.Component<ProfileProps, any> {
    render() {
        return (
            <div className="ProfileContainer">
                <div className="Account-header">
                    <Avatar src={this.props.account.avatar} size="75" round={true} />
                    <div className="ProfileName">
                        Welcome back,<br />
                        <div className="Title">{this.props.account.first_name} {this.props.account.family_name}</div>
                    </div>
                </div>
                <div className="BalanceContainer">
                    <div className="Caption">Your balance</div>
                    <div className="Balance">${this.props.account.balance / 100}</div>

                    <div className="Caption">Your savings</div>
                    <div className="Balance">${this.props.account.savings / 100}</div>

                    <Button className="Button" style={{marginTop: '2em', borderRadius: 24}} variant="outlined" color="primary" autoCapitalize="false">Switch account</Button>
                </div>
            </div>
          );
    }
}