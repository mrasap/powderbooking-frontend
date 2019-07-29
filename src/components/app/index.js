import React, {Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
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
            <Fragment>
                <Router>
                    <Navbar links={routes}/>
                    <div id="content" className="container-fluid">
                        <Switch>
                            {routes.filter(route => route.isRoute).map(route => {
                                return <Route key={route.id.toString()} path={route.url} component={route.component}/>
                            })}
                            <Route key={'default'}><Redirect to={'/map'}/></Route>
                        </Switch>
                    </div>
                </Router>
                <Explanation/>
                <About/>
            </Fragment>
        );
    }
}