import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Home = () => {
    return(
<>
<div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-8">Welcome To TDList</h1>
  
        <div className="flex gap-8 ">
          <div className=" p-4 h-52 text-black mr-12 bg-red-400">
            <p className="text-2xl text-center leading-8 py-5">Is This Your First Time?</p>
            <p className="text-2xl text-center leading-8 py-5">Please Sign-Up </p>
          </div>
          <div className="flex-1  p-4 text-black ml-12 bg-red-400">
            <p className="text-2xl text-center leading-8 py-5">Already Have An Account?</p>
            <p className="text-2xl text-center leading-8 py-5">Please Sign-In</p>
          </div>
        </div>
  
        <NavLink to={"/ Registration"}>
        <button className="mt-24 bg-slate-200  hover:bg-rose-400 text-white font-bold py-2 px-6 rounded">
          Create account
        </button>
        </NavLink>
  
        <p className="mt-4 text-gray-600">Already have an account? <NavLink to={'/logIn'}>LogIn</NavLink></p>
      </div>
</>
    );
};
