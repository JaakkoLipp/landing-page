import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
          <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
            <h2 className="text-3xl font-light mb-6 text-center">Login</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="">
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </form>
            <p className="text-sm text-gray-600 text-center mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-indigo-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
