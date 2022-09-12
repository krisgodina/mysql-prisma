import React from 'react'
import { Icon } from '@iconify/react';
import { useMutation } from '@apollo/client';
import { DELETE_FRIEND, UPDATE_FRIEND } from '../mutations/friendMutations';
import { GET_FRIENDS, GET_FRIEND } from '../queries/friendQueries';


export default function FriendRow({ friend }) {

    const [name, setName] = React.useState(friend.name);
    const [phone, setPhone] = React.useState(friend.phone);
    const [email, setEmail] = React.useState(friend.email);

    const [deleteFriend] = useMutation(DELETE_FRIEND, {
        variables: { id: friend.id },
        refetchQueries: [{ query: GET_FRIENDS },],
    });

    const [updateFriend] = useMutation(UPDATE_FRIEND, {
        variables: { id: friend.id, name, email, phone },
        refetchQueries: [{ query: GET_FRIEND, variables: { id: friend.id } }],
    });


    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                    className="friendname bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe" required=""
                />
            </th>
            <td className="py-4 px-2">
                <input type="text" id="name" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John" required=""
                />
            </td>
            <td className="py-4 px-2">
                <input type="text" id="name" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John" required=""
                />
            </td>
            <td className="py-4 px-8">
                <button className="deleteFriend" onClick={deleteFriend}>
                    <Icon icon="dashicons:trash" className='text-2xl text-red-600' />
                </button>
            </td>
            <td className="py-4 px-8">
                <button className="updateFriend" onClick={() => updateFriend(name, email, phone)}>
                    <Icon icon="dashicons:update" className='text-2xl text-blue-300' />
                </button>
            </td>
        </tr>
    );
}
