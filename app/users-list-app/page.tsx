import React, { Fragment } from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    return (
        <Fragment>
            <h1 className='italic mb-3'>Users Page</h1>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default UsersPage