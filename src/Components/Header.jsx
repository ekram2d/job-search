import React, { useState } from 'react';
import { BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

      const [set, setItem] = useState(false)

      const click = () => {
            setItem(!set);
            // console.log(!set);
      }

      return (
            <div className='mb-44'>

                  <div className="navbar bg-orange-200 rounded w-[80%] mx-auto  mb-32" >
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <span tabIndex={0} className="btn btn-ghost lg:hidden">
                                          {!set ? <button onClick={() => click()}> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button> : <button onClick={() => click()} >X</button>
                                          }
                                    </span>

                                    {set && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                          <li>
                                                <NavLink to='/'>Home</NavLink>

                                          </li>
                                          <li><NavLink to='/statistics'>Statistics</NavLink></li>
                                          <li tabIndex={0}>
                                                <NavLink to='/apliedjob'>Aplied jobs</NavLink>

                                          </li>
                                          <li>
                                                <NavLink to='/blog'>Blog</NavLink>

                                          </li>
                                    </ul>
                                    }


                              </div>
                              <NavLink to='/' className="btn btn-ghost normal-case text-xl">Job Search</NavLink >
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li>
                                          <NavLink to='/'>Home</NavLink>
                                    </li>
                                    <li> <NavLink to='/statistics'>Statistics</NavLink></li>
                                    <li tabIndex={0}>
                                          <NavLink to='/apliedjob'>Aplied jobs</NavLink>

                                    </li>
                                    <li>
                                          <NavLink to='/blog'>Blog</NavLink>

                                    </li>
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <a className="btn btn-active btn-primary">Start Apply</a>
                        </div>
                  </div>
            </div>
      );
};

export default Header;