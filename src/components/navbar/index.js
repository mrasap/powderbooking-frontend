import React from "react";
import './style.css';
import NavbarItem from "./NavbarItem";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.links = props.links;

        // set initial state
        this.state = {};
    }

    render() {
        return (
            <nav id='header' className="navbar navbar-expand-lg navbar-dark fixed-top">
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
