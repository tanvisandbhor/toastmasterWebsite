// src/pages/Login.jsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Admin Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
