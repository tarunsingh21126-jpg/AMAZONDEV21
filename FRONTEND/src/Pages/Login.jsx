import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../Utils/auth";



function Login() {
  const BASE = import.meta.env.VITE_DJANGO_BASE_URL;
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const reponse = await fetch(`${BASE}/api/token/`, {
        method : "POST",
        headers : {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(form),
      });
    const data = await reponse.json();
    if (res.ok) {
      saveToken(data);
      setMsg("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      },800);
    } else {
      setMsg(data.detail || "Login failed.please try again.")
    }
     } catch (error) {
    setMsg("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;