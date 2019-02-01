import { Helmet } from 'react-helmet';

import * as React from "react"

import { Button, Col, DropdownItem, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Row } from 'reactstrap';
import { Util } from "../../client/Util";
import { Spacer } from "./Spacer";
import { Disclaimer } from "./Disclaimer";
import { Footer } from "./Footer";

export default class Home extends React.Component<any> {

    static fetchData({ store }) {
        return new Promise(resolve => resolve())//default
    }

    componentDidMount() {
        Util.scrollTop()
    }

    render() {
        return (
            <div className='container home'>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Important Header</title>
                </Helmet>

                <div className="jumbotron">

                    <h1>Important Header</h1>

                    <br/>

                    <h2>
                        Tada
                    </h2>
                </div>

                <Disclaimer/>

                <Spacer/>

                <Footer/>

            </div>
        )
    }
}
