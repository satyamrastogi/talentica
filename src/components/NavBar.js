import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-info">
      <Link className="navbar-brand" to="/">Talentica</Link>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav"> 
        <Link className="nav-item nav-link " to="/">Home</Link>
        <Link className="nav-item nav-link " to="/student">For Students</Link>
        <Link className="nav-item nav-link " to="/teacher">For Teacher</Link>
        </div>
      </div>
    </nav>

  );
  }
}

export default Navbar;