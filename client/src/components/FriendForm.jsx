import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_FRIEND } from '../mutations/friendMutations';
import { GET_FRIENDS } from '../queries/friendQueries';

export default function FriendForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState('');

  const [createFriend] = useMutation(CREATE_FRIEND, {
    variables: { name, email, phone },
    update(cache, { data: { createFriend } }) {
      const { friends } = cache.readQuery({ query: GET_FRIENDS });

      cache.writeQuery({
        query: GET_FRIENDS,
        data: { friends: [...friends, createFriend] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill in all fields');
    }

    createFriend(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');
  };

  function getForm() {

    return (<div className='align-center mx-auto'>

      <form onSubmit={onSubmit}>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
            className="nameinput bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="John Doe" required="" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email address
          </label>
          <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}
            className="emailinput bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="john.doe@company.com" required="" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone number
          </label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="phoneinput bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="10 digit number" pattern="[0-9]{10}" title="Must be a 10 digit number." required="" 
          />
        </div>

        <div className='center'>
          <button type="submit" className="submitfriend text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Submit
          </button>
        </div>

      </form>

    </div>)
  };

  return (
    <div className='max-w-sm w-full mb-10'>
      {getForm()}
    </div>
  );
}
