import React from 'react'

const registration = () => {
    return (
  <>
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-1/2 bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-600 mb-8 text-center">Login TDList</p>
          <div className="mb-4">
            <label htmlFor="names" className="block mb-1 font-medium">Names</label>
            <input type="text" id="names" placeholder="Enter Your Full Name" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block mb-1 font-medium">User-Name</label>
            <input type="text" id="userName" placeholder="Enter Your New UserName" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
            <input type="email" id="email" placeholder="Enter Your E-mail" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input type="password" id="password" placeholder="Create Your Password" className="w-full p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="keep-signed-in" className="mr-2" />
            <label htmlFor="keep-signed-in">Remember my password</label>
          </div>
          
          <button className="bg-rose-400 text-black px-4 py-2 rounded-md mt-8 w-full">Register</button>
          <h3>Already have an Account?</h3>
          <button className="bg-secondary text-primary px-4 py-2 rounded-md mt-8 w-full">Log-In</button>
        </div>
      </div>
  
  </>
    );
  }
  
  export default registration;