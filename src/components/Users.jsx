import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function Users() {
  const getData = () => axios.get("https://jsonplaceholder.typicode.com/users/");

  const { data, isLoading, isError } = useQuery({
    queryKey: 'users',
    queryFn: getData
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Users Data</h1>

      {isLoading && (
        <h2 className="text-3xl text-gray-700">Loading...</h2>
      )}
      {isError && (
        <h2 className="text-3xl text-red-600">An error occurred</h2>
      )}

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {data?.data.length > 0 &&
          data?.data.map((user, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:scale-105 duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <h3 className="text-sm text-gray-600">{user.email}</h3>
              <h4 className="text-sm text-gray-500">{user.phone}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Users;