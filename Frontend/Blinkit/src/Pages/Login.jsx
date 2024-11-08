import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-2 mx-4 w-full max-w-md shadow-lg">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8">
          <h1 className="text-3xl font-bold dark:text-gray-300 text-center mb-6">Log in</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-lg dark:text-gray-300">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border rounded-lg dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>
            <a
              href="#"
              className="text-blue-400 text-sm hover:underline"
            >
              Forgot your password?
            </a>
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              LOG IN
            </button>
          </form>
          <div className="mt-4 text-center text-sm dark:text-gray-300">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:underline">Sign Up</a>
            </p>
          </div>
          <div className="flex items-center justify-center mt-5 gap-2">
            {["Google", "LinkedIn", "GitHub", "Facebook", "Twitter", "Apple"].map((provider) => (
              <button
                key={provider}
                aria-label={`Log in with ${provider}`}
                className="p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={`https://ucarecdn.com/${{
                    Google: "8f25a2ba-bdcf-4ff1-b596-088f330416ef",
                    LinkedIn: "95eebb9c-85cf-4d12-942f-3c40d7044dc6",
                    GitHub: "be5b0ffd-85e8-4639-83a6-5162dfa15a16",
                    Facebook: "6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9",
                    Twitter: "82d7ca0a-c380-44c4-ba24-658723e2ab07",
                    Apple: "3277d952-8e21-4aad-a2b7-d484dad531fb"
                  }[provider]}/`}
                  alt={provider}
                  className="max-w-[25px] dark:invert"
                />
              </button>
            ))}
          </div>
          <div className="text-gray-500 text-center mt-4 text-sm">
            <p>
              By signing in, you agree to our{" "}
              <a href="#" className="text-blue-400 hover:underline">Terms</a> and{" "}
              <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
