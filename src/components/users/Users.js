import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Users extends Component {
	users = [
		{
			id: '1',
			login: 'mojombo_1',
			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
			html_url: 'https://github.com/mojombo',
		},
		{
			id: '2',
			login: 'mojombo_2',
			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
			html_url: 'https://github.com/mojombo',
		},
		{
			id: '3',
			login: 'mojombo_3',
			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
			html_url: 'https://github.com/mojombo',
		},
	];
	render() {
		return (
			<div style={userStyles}>
				{this.users.map((user) => (
					<UserItem id={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}
