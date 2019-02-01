import * as React from "react"

import { Button, Col, DropdownItem, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Row } from 'reactstrap';

export class Footer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <footer className="page-footer font-small blue pt-4">

                    <div className="container-fluid text-center text-md-left">

                        <div className="row">

                            <div className="col-md-6 mt-md-0 mt-3">

                                <h5 className="">Important Header</h5>
                                <p>Important Header Message</p>

                                <div className="social-icons-container">
                                    <a className="social-icon facebook" href="https://www.facebook.com/nextinterfaces"
                                       target="_blank"> <i className="soc-facebook"></i> </a>
                                    <a className="social-icon twitter" href="https://twitter.com/nextinterfaces"
                                       target="_blank"> <i className="eh-ccr-symbol-twitter"></i> </a>
                                    <a className="social-icon instagram" href="//www.instagram.com/nextinterfaces/"
                                       target="_blank"> <i className="soc-instagram"></i> </a>
                                    <a className="social-icon pinterest" href="//pinterest.com/nextinterfaces/"
                                       target="_blank"> <i className="eh-ccr-symbol-pinterest"></i> </a>
                                    <a className="social-icon googleplus" href="https://plus.google.com/+nextinterfaces/posts"
                                       target="_blank"> <i className="soc-google"></i> </a>
                                </div>

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3"/>

                            <div className="col-md-6 mt-md-0 mt-3 text-right footer-copyright">
                                <h5 className="">&nbsp;</h5>
                                <p>© 2018 Copyright nextinterfaces.com</p>
                            </div>
                        </div>

                    </div>

                </footer>
            </div>
        )
    }
}