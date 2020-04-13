import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { loading, users } = githubContext;
	if (loading) {
		return <Spinner />
	} else {
		return (
			<div style={userStyles}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

Users.propType = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

export default Users;
