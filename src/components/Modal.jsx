import React from "react";
import useModalStore from "../store/useModalStore";

function Modal() {
  const { isModalOpen, openModal, closeModal } = useModalStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-6"> Modal Window</h1>
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-lg"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center text-gray-800">
            <h2 className="text-2xl font-semibold mb-4"> Modal Window</h2>
            <p className="text-lg mb-6">
              You have opened the modal! Click the button below to close it.
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
