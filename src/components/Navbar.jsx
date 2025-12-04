import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/Navbar.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const user = useSelector((state) => state.auth.user)

  const getDashboardLink = () => {
    if (!user) return null
    if (user.role === 'donor') return '/donor-dashboard'
    if (user.role === 'ngo') return '/ngo-dashboard'
    if (user.role === 'admin') return '/admin-dashboard'
    return null
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🏥</span>
          Good Health
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/campaigns" className="nav-link">Campaigns</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/impact" className="nav-link">Impact</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {user && getDashboardLink() && (
            <Link to={getDashboardLink()} className="nav-link">Dashboard</Link>
          )}
        </div>

        <div className="nav-buttons">
          {user ? (
            <div className="user-menu">
              <span className="user-name">{user.name}</span>
              <span className="user-role">({user.role})</span>
            </div>
          ) : (
            <>
              <Link to="/signin" className="btn login-btn">
                Sign In
              </Link>
              <Link to="/signup" className="btn signup-btn">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/campaigns" className="mobile-link">Campaigns</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <Link to="/impact" className="mobile-link">Impact</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
          {user && getDashboardLink() && (
            <Link to={getDashboardLink()} className="mobile-link">Dashboard</Link>
          )}
          {!user && (
            <>
              <Link to="/signin" className="mobile-link">Sign In</Link>
              <Link to="/signup" className="mobile-link">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar