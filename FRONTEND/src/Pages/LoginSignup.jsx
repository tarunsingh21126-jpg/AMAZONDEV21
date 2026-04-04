import { useState } from "react";

export default function AuthUI() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-200">
      <div className="w-[768px] bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-2">

        {/* LEFT SIDE FORM */}
        <div className="flex items-center justify-center p-8">
          {isSignup ? (
            <form className="w-full max-w-sm flex flex-col">
              <h2 className="text-xl font-bold mb-4">Create Account</h2>

              <input type="text" placeholder="Username" className="bg-gray-200 p-2 rounded mb-2" />
              <input type="email" placeholder="Email" className="bg-gray-200 p-2 rounded mb-2" />
              <input type="password" placeholder="Password" className="bg-gray-200 p-2 rounded mb-2" />
              <input type="password" placeholder="Confirm Password" className="bg-gray-200 p-2 rounded mb-2" />

              <button className="bg-purple-700 text-white py-2 rounded mt-2">Sign Up</button>
            </form>
          ) : (
            <form className="w-full max-w-sm flex flex-col">
              <h2 className="text-xl font-bold mb-4">Login</h2>

              <input type="email" placeholder="Email" className="bg-gray-200 p-2 rounded mb-3" />

              <div className="relative mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-gray-200 p-2 rounded w-full"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 cursor-pointer"
                >
                  👁️
                </span>
              </div>

              <button className="bg-purple-700 text-white py-2 rounded">Login</button>
              <a href="#" className="text-sm mt-2">Forget Password?</a>
            </form>
          )}
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white flex flex-col items-center justify-center p-8">
          {isSignup ? (
            <>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="mt-2 text-center">Already have an account?</p>
              <button
                onClick={() => setIsSignup(false)}
                className="mt-4 border px-4 py-2 rounded"
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Hello Friend</h1>
              <p className="mt-2 text-center">Register with your details</p>
              <button
                onClick={() => setIsSignup(true)}
                className="mt-4 border px-4 py-2 rounded"
              >
                SIGN UP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

