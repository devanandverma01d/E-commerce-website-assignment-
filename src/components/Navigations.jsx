import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import CartBtn from './CartBtn'

const Navigations = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/product">Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        <NavLink className="navbar-brand fw-bold mx-auto" to="/">TONEOP/BANSAL GROUP</NavLink>
        <SignIn />
        <SignUp />
        <CartBtn />
        </div>
    </nav>
  )
}

export default Navigations