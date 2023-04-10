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
            <div>

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
                                          <li><a>Statistics</a></li>
                                          <li tabIndex={0}>
                                                <a className="justify-between">
                                                      Aplied jobs

                                                </a>

                                          </li>
                                          <li><a>Blog</a></li>
                                    </ul>
                                    }


                              </div>
                              <a className="btn btn-ghost normal-case text-xl">Job Search</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                              <li>
                                                <Link to='/'>Home</Link>
                                          </li>
                                    <li><a>Statistics</a></li>
                                    <li tabIndex={0}>
                                          <a className="justify-between">
                                                Aplied jobs

                                          </a>

                                    </li>
                                    <li><a>Blog</a></li>
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