"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

function Login() {
  const router = useRouter()
  const handleSubmit = (e) => {
    const formData = {
      name: e.get("name"),
      username: e.get("username"),
      password: e.get("password"),
    };
    // For now, just log the form data
    console.log("Sign Up Data:", formData);

    axios.post("/api/auth/login", formData)
    .then(response => {console.log(response.data)
      router.push("/user")
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        action={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        

        <label
          htmlFor="username"
          className="block mb-2 font-medium text-gray-700"
        >
          Username
        </label>
        <input
          name="username"
          type="text"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Choose a username"
        />

        <label
          htmlFor="password"
          className="block mb-2 font-medium text-gray-700"
        >
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Create a password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        <p className="text-center py-2">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-bold hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
