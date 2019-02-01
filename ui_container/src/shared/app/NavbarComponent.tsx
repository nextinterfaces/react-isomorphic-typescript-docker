import * as React from "react"
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Util } from "../../client/Util";

export default class NavbarComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    static fetchData() {
        // ..
    }

    toggle() {
        if (Util.isNode())
            return

        const navToggler = $('.navbar-toggler')
        if (navToggler.is(":hidden"))
            return

        navToggler.click()
        // this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light fixed-top">
                    <Link to='/' className="navbar-brand">&nbsp;</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/conditions' className="nav-link" onClick={this.toggle}>Conditions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/protocols' className="nav-link" onClick={this.toggle}>Protocols</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/people' className="nav-link" onClick={this.toggle}>Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}