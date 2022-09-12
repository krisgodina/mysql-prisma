import { useQuery } from '@apollo/client';
import Spinner from './spinners/Spinner';
import { GET_FRIENDS } from '../queries/friendQueries';
import FriendRow from './FriendRow';
import Error from './data-display/alerts/Error';

export default function Friends() {
    const { loading, error, data } = useQuery(GET_FRIENDS);

    if (loading) return <Spinner />;

    if (error) return (<Error />);

    return (
        <>
            {!loading && !error && (

                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th> 
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Phone
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Delete
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.friends.map((friend) => (
                                <FriendRow key={friend.id} friend={friend} />
                            ))}
                        </tbody>
                    </table>
                </div>

            )}
        </>
    );
}
