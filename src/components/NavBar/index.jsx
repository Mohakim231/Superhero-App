import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
    const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053'});
  return (
    <>
    <nav>
        <h1>Vote Aquaman</h1>
        <ul className='nav-list'>
            <NavLink className='nav-item' to='/'>
                <li>
                    Home
                </li>
            </NavLink>
            <NavLink className='nav-item' to='/Heroes'>
                <li>
                    Heros
                </li>
            </NavLink>
            <NavLink className='nav-item' to='/Aquaman'>
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