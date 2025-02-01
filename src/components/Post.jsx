import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: (newUser) => axios.post('https://jsonplaceholder.typicode.com/users', newUser),
    onSuccess: () => {
      setMessage('✅ User added successfully!');
      setTitle('');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    },
    onError: () => {
      setMessage('❌ An error occurred!');
      setTimeout(() => setMessage(''), 3000);
    },
  });

  function handlePost(e) {
    e.preventDefault();
    if (!title || !email) return setMessage("⚠️ All fields must be filled!");
    if (title.length < 3) return setMessage("⚠️ Title must be at least 3 characters!");
    if (!email.includes("@") || !email.includes(".com")) return setMessage("⚠️ Invalid email format!");

    mutate({ name: title, email });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <form className="w-[400px] bg-gray-800 p-6 rounded-xl shadow-xl text-white flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-center mb-4">📝 Post Mutation</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter title..."
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter email..."
        />

        {message && <p className="text-center text-lg font-semibold">{message}</p>}

        <button
          onClick={handlePost}
          className="w-full bg-green-500 py-3 text-lg font-bold rounded-lg hover:bg-green-600 transition-all active:scale-95"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}

export default Post;
