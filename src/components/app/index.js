import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../navbar";
import Explanation from "../explanation";
import About from "../about";
import routes from "../../routes"

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router>
                    <div id="content" className="container-fluid">
                        <h3>content</h3>
                    </div>
                    <Navbar links={routes}/>
                    {routes.filter(route => route.isRoute).map(route => {
                        return <Route key={route.id.toString()} path={route.url} component={route.component} />
                    })}
                </Router>
                <Explanation/>
                <About/>
            </div>
        );
    }
}