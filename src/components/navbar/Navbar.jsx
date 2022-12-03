import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/users"} className="nav-link px-0 pe-4 fw-bold">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/photos"} className="nav-link px-0 pe-4 fw-bold">Photos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar