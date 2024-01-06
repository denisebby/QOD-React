import React from 'react'

import PropTypes from 'prop-types'

import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="navbar-interactive-image"
        />
        <span className="navbar-interactive-text">{props.text}</span>
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        >
          <div className="navbar-interactive-buttons">
            <button className="navbar-interactive-register Content button">
              {props.Register}
            </button>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu"
        >
          <div className="navbar-interactive-nav">
            <div className="navbar-interactive-top">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="navbar-interactive-image1"
              />
              <span className="Heading navbar-interactive-text1">
                {props.text1}
              </span>
              <div
                data-thq="thq-close-menu"
                className="navbar-interactive-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon2"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="navbar-interactive-buttons1">
              <button className="navbar-interactive-login button">
                {props.Login}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  image_alt1: 'image',
  text1: 'Data Pro Daily',
  rootClassName: '',
  Login: 'Sign in',
  image_alt: 'image',
  Register: 'Sign In',
  text: 'Data Pro Daily',
  image_src: '/external/icons8-hyena-64%20(2)-1500h.png',
  image_src1: '/external/icons8-hyena-64%20(2)-1500h.png',
}

NavbarInteractive.propTypes = {
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  Login: PropTypes.string,
  image_alt: PropTypes.string,
  Register: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default NavbarInteractive
