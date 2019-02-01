import * as React from "react"

import {
    Button,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Footer,
    InputGroupButtonDropdown,
    Row
} from 'reactstrap';
import { Spacer } from "./Spacer";

declare const window: any

export class Disclaimer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <hr/>
                <Spacer/>
                <h3>Disclaimer:</h3>
                <p className={'gray'}>
                    Important disclaimer
                    <br/>
                    Please visit our full <a href="/static/root/terms.html" target="_blank">Terms of Service</a>
                </p>

                <h4>By Clicking Enter, you agree with our <a href="/static/root/terms.html" target="_blank">Terms of
                    Service</a></h4>
                <Button color="primary" onClick={() => window.location = '/conditions'}>Enter</Button>{' '}

            </div>
        )
    }
}