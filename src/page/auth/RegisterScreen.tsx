import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="w-[90%] md:w-[400px]  lg:w-[600px] border p-4">
      <p className="font-semibold uppercase text-[20px]">Register</p>
      <div className="flex flex-col">
        <label htmlFor="" className="font-semibold text-[12px]">
          name
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="h-[45px] border pl-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-semibold text-[12px]">
          email
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          className="h-[45px] border pl-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-semibold text-[12px]">
          password
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          className="h-[45px] border pl-2 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-black w-full text-white rounded-md mt-10 font-bold py-4 "
        onClick={handleSubmit}
      >
        {loading ? (
          <div>
            <FaSpinner />{" "}
          </div>
        ) : (
          " Register"
        )}
      </button>
      <div className="flex justify-center w-full text-[12px]">
        <span>
          {" "}
          Already have an account{" "}
          <Link to="auth/login" className="font-semibold italic">
            Login here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterScreen;
