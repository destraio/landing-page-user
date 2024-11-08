import { useState } from 'react';

export default function Modal(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Open Modal
        </button>

        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
                <p className="mb-4">This is the content of the modal.</p>
                <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                Close
                </button>
            </div>
            </div>
        )}
        </div>
    );
    }