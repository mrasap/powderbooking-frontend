import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../navbar";
import Explanation from "../explanation";
import About from "../about";
import routes from "../../routes"

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {};
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar links={routes}/>
                    <div id="content" className="container-fluid">
                        {routes.filter(route => route.isRoute).map(route => {
                            return <Route key={route.id.toString()} path={route.url} component={route.component} />
                        })}
                    </div>
                </Router>
                <Explanation/>
                <About/>
            </div>
        );
    }
}