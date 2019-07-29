import {Link, withRouter} from "react-router-dom";
import React from "react";

function NavbarItemRoute(props) {
    return <Link to={props.url} className="nav-link">{props.title}</Link>;
}

function NavbarItemRef(props) {
    return <a href={props.url} className={props.active ? "nav-link active" : "nav-link"}>{props.title}</a>;
}

class NavbarItem extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {};
    }

    render() {
        const props = this.props;
        if (props.requiredPath && !props.location.pathname.startsWith(props.requiredPath)) {
            // This item shouldn't be rendered as the user is currently not on the page that is required
            return null;
        } else if (props.isRoute &&
            !props.location.pathname.startsWith(props.url.split(':')[0])) {
            // We are on another page, so clicking the item should bring us to that route
            return (
                <li className="nav-item">
                    <NavbarItemRoute {...props}/>
                </li>
            );
        } else if (props.isRoute) {
            // We are on the page of the route, so clicking the item should bring us to the top
            return (
                <li className="nav-item">
                    <NavbarItemRef {...props} url={'#content'} active={true}/>
                </li>
            );
        }  else {
            // The item is just a ref to an id
            return (
                <li className="nav-item">
                    <NavbarItemRef {...props}/>
                </li>
            );
        }
    }
}

export default withRouter(NavbarItem);