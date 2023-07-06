import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="flex justify-between p-5 bg-blue-500">
      <NavLink className="text-white" exact to="/">Home</NavLink>
      <NavLink className="text-white" to="/about">About</NavLink>
      <NavLink className="text-white" to="/courses">Courses</NavLink>
      <NavLink className="text-white" to="/contact">Contact</NavLink>
    </div>
  );
};

export default Navigation;
