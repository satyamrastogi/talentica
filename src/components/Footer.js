import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div class="bg-dark ">
                <div class="container bg-dark text-white">
                    <div class="row">
                        <div class="col-sm-4">
                            <h3>Our Team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Contrbution</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center bg-dark text-primary" >
                    &copy; &nbsp;	
        {new Date().getFullYear()}, with <i className="material-icons">&nbsp;	Strength</i> &nbsp;	 of &nbsp;
        <Link to="/" className="text-white" target="_blank">Talentica</Link>
                </div>
            </div>
        )

    }
}

export default Footer