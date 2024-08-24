import React from "react";
import { NavLink, Link } from "react-router-dom";
import Task from '../assets/task-removebg-preview.png'

export const Home = () => {
    return(
<>
<div className="h-screen bg-gradient-to-tr from-red-300 to-red-500">
<div className=" ">
        <h1 className="text-3xl font-bold mb-8">Take Control <br/> of your project <br/>and Task Effortlessy</h1>
        <p>Stay on top of every task</p>
        <NavLink to={"/ Registration"}>
        <button className="mt-24 bg-slate-200  hover:bg-rose-400 text-white font-bold py-2 px-6 rounded">
          Create account
        </button>
        </NavLink>
  </div>
  <div>
        <img src={Task} alt="" style={{width:"30%", height:"200px"}} />
        
  
        <p className="mt-4 text-gray-600">Already have an account? <NavLink to={'/logIn'}>LogIn</NavLink></p>
      </div>
      </div>
</>
    );
};
