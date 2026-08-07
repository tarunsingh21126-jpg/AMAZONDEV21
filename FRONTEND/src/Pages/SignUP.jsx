import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const BASE = import.meta.env.VITE_DJANGO_BASE_URL; // change after deploy

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setMsg("");

    //     try {
    //         const response = await fetch(`${BASE}/api/register/`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         const data = await response.json();

    //         if (res.ok) {
    //             saveToken(data);
    //             setMsg("Login successful! Redirecting...");
    //             setTimeout(() => {
    //                 navigate("/login");
    //             }, 1200);
    //         } else {
    //             setMsg(data.username || data.password || JSON.stringify(data));
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         setMsg("An error occurred. Please try again later.");
    //     }
    // };
    const saveToken = (data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        try {
            // Register user
            const registerResponse = await fetch(`${BASE}/api/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const registerData = await registerResponse.json();

            if (!registerResponse.ok) {
                setMsg(
                    registerData.username ||
                    registerData.email ||
                    registerData.password ||
                    registerData.password2 ||
                    JSON.stringify(registerData)
                );
                return;
            }

            // Automatically login
            const loginResponse = await fetch(`${BASE}/api/token/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: form.username,
                    password: form.password,
                }),
            });

            const loginData = await loginResponse.json();

            if (loginResponse.ok) {
                saveToken(loginData);
                setMsg("Account created successfully!");

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                setMsg("Account created. Please login.");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            }

        } catch (error) {
            console.error(error);
            setMsg("Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

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
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
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

                    <input
                        type="password"
                        name="password2"
                        placeholder="Confirm-Password"
                        value={form.password2}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>

                </form>
                {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
            </div>
        </div>
    );
};

export default SignUp;