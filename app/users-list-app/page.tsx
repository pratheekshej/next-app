import React, { Fragment } from 'react'

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

const UsersPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-cache' });
    const users: User[] = await response.json();

    return (
        <div className='overflow-x-auto flex flex-col items-center justify-start w-full'>
            <h1 className='py-8 w-full flex flex-row justify-center items-center text-8xl'>Users Page</h1>
            <table className="table w-[75%] mb-16">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr className='hover hover:cursor-pointer'>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default UsersPage