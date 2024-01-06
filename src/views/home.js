import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>QOD</title>
        <meta property="og:title" content="QOD" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
      <Footer></Footer>
    </div>
  )
}

export default Home
