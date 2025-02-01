import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Paginate() {
  const [page, setPage] = useState(1);

  async function getData({ queryKey }) {
    const page = queryKey[1];
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
    return response.data;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', page],
    queryFn: getData,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      <h1 className="text-4xl font-extrabold mb-6">📌 Paginate</h1>

      {isLoading && <p className="text-2xl font-semibold text-blue-400">Loading...</p>}
      {isError && <p className="text-2xl font-semibold text-red-500">An error occurred!</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((user) => (
          <li key={user.id} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-400">#{user.id}</h2>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <h3 className="text-lg text-gray-300">{user.email}</h3>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-gray-700 px-6 py-3 rounded-lg shadow-md text-white font-medium hover:bg-gray-600 transition-all disabled:opacity-50"
        >
          ⬅️ Previous
        </button>
        <span className="text-xl font-semibold">Page: {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-700 px-6 py-3 rounded-lg shadow-md text-white font-medium hover:bg-gray-600 transition-all"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default Paginate;
