import React, { Component } from 'react'
import { Home } from './pages/Home'
import { Switch, Route } from "react-router-dom"
import Login from "./components/login/Login";
import Account from "./components/signin/Signup";
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer'



export default function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts"  >
            <Contact />
          </Route>
          <Route path="/Project" component={Project} />
          <Route path="/About" component={About} />
          <div className="d-flex justify-content-center align-items-center container">
            <Route path="/login" component={Login} />
            <Route path="/Account" component={Account} />
          </div>

        </Switch>
      </div>
      <Footer />
    </div>
  )
}
