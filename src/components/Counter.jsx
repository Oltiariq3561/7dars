import React from 'react';
import useCounterStore from '../store/useCounterStore';

function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 font-mono">{count}</h1>
        <div className="flex justify-between space-x-4">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
