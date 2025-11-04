

import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user, setUser }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-animate">
      
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center transform transition-all duration-700 hover:scale-105 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 ">Welcome to Home Page 🌿</h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <section>
            <label htmlFor="name" className="block mb-2 font-semibold">Name :</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
              onChange={(e) => setUser(e.target.value)}
            />
          </section>

          <Link to="/quiz">
            <button
              className={`w-full py-2 rounded text-white font-semibold transition-all duration-300 
                ${user.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-700 hover:scale-105 shadow-lg'}`}
              disabled={user.length === 0}
              type="submit"
            >
              Start Quiz 🚀
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
