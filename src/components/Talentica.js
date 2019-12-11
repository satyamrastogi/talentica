import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ForTeacher from './ForTeacher'
import ForStudents from './ForStudent'
import Default from './Default'
class Talentica extends Component {
    render() {
        return (
            <div>
                    {/* <p>this is not rendering</p>
                    <Header></Header> */}
                    <NavBar></NavBar>
                    <Switch>
                        <Route exact path="/"><Body></Body></Route>
                        <Route exact path="/teacher"><ForTeacher></ForTeacher></Route>
                        <Route exact path="/student"><ForStudents></ForStudents></Route>
                        <Route><Default></Default></Route> 
                    </Switch>
                <Footer></Footer>
            </div>
        )
    }
}

export default Talentica
