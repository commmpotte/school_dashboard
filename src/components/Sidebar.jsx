import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsNavOpen(false)
      } else {
        setIsNavOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav
      className="navbar navbar-expand-lg pt-0 text-center"

    >
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${
          isNavOpen ? 'bg-dark text-center show' : ''
        } collapse navbar-collapse`}
        id="navbarNav"
        style={{ width: '50%' }}
      >
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{
            width: '100%',
            height: window.innerWidth >= 992 ? '100vh' : '',
            display: window.innerWidth >= 992 ? 'block' : 'none',
          }} 
        >
          <h5 className="fs-6 text-center p-2">Teacher's home</h5>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeclassname="active"
                onClick={() => setIsNavOpen(false)}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/students"
                className="nav-link"
                activeclassname="active"
                onClick={() => setIsNavOpen(false)}
              >
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/schedule"
                className="nav-link"
                activeclassname="active"
                onClick={() => setIsNavOpen(false)}
              >
                Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/news"
                className="nav-link"
                activeclassname="active"
                onClick={() => setIsNavOpen(false)}
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
