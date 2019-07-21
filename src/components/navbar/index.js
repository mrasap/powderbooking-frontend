import React from "react";
import './style.css';
import {Link} from "react-router-dom";


function NavbarItemRoute(props) {
    return <Link to={props.url} className="nav-link">{props.title}</Link>;
}

function NavbarItemRef(props) {
    return <a href={props.url} className="nav-link">{props.title}</a>;
}

function NavbarItem(props) {
    return (
        <li className="nav-item">
            {props.isRoute ? <NavbarItemRoute {...props}/> : <NavbarItemRef {...props}/>}
        </li>
    );
}

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.links = props.links;

        // set initial state
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <a className="navbar-brand" href="/">Welcome powder hunter!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">

                    <ul className="navbar-nav">
                        {this.links.map((link) => <NavbarItem key={link.id.toString()} {...link}/>)}
                    </ul>

                </div>
            </nav>
        );
    }
}
