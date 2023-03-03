import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav>
        <h1>Vote Aquaman</h1>
        <ul>
            <NavLink to='/'>
                <li>
                    Home
                </li>
            </NavLink>
            <NavLink to='/Heroes'>
                <li>
                    Heros
                </li>
            </NavLink>
            <NavLink to='/Aquaman'>
                <li>
                    Aquaman
                </li>
            </NavLink>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default NavBar