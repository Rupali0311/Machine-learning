import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from './logo.jpeg'
import './Navbar.css'

class Home extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <div>
       <div className="nav">
<img src={logo} alt=""/>
<a className="hactive" href='/'><b>Home</b></a>
<a href="./register"><b>Register</b></a>
<a href="/login"><b>Login</b></a>
<a href="/about"><b>About Us</b></a>
</div>
      </div>
    );
  }
}

export default withRouter(Home)
