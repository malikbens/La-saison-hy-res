import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV2 from './components/home-v2';
import AvilableProperty from './components/available-property';
import PropertyDetails from './components/property-details';
import About from './components/about';
import Advisor from './components/advisor';
import Error from './components/error';
import Contact from './components/contact';
import SearchGrid from './components/search-grid';


class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Switch>
                    <Route exact path="/" component={HomeV2} />
                    <Route path="/home-v2" component={HomeV2} />
                    <Route path="/available-property" component={AvilableProperty} />
                    <Route path="/property-details" component={PropertyDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/advisor" component={Advisor} />
                    <Route path="/error" component={Error} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/search-grid" component={SearchGrid} />
                    
                </Switch>
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('realdeal'));
