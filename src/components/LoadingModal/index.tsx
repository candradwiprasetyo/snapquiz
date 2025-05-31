"use client";

export default function LoadingModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-3xl shadow-lg px-6 py-10 text-center w-[90%] max-w-sm">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-green-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <p className="text-lg font-semibold text-gray-700">
            Sebentar ya… <br></br>
            <span className="text-sm">Kami sedang menyiapkan quiz untukmu</span>
          </p>
        </div>
      </div>
    </div>
  );
}
