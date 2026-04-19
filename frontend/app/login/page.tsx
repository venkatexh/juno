"use client";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await axios.post(
      `${baseURL}/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    window.location.href = "/space";
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <form
        className='flex flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='w-64 border border-gray-300 rounded-lg px-2 py-1'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className='w-64 border border-gray-300 rounded-lg px-2 py-1'
        />
        <button type='submit' className='cursor-pointer'>
          Login
        </button>
      </form>
    </div>
  );
}
