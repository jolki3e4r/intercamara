import React, { Component } from 'react';
import Login from '../src/components/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Inicio from '../src/components/Inicio'


const history = createBrowserHistory()
class App extends Component {
   
    render() { 
        return ( 
            <Router history={history}>
                <Route exact path='/' component={Login} />
                <Route exact path='/inicio' component={Inicio} /> 
            </Router>
            
         );
    }
}
 
export default App;