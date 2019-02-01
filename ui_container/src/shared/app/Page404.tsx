import * as React from "react"
import { Spacer } from "./Spacer";
import { Footer } from "./Footer";

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

export default class Page404 extends React.Component<any> {

    render() {
        return (
            <div className='container'>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>nextinterfaces - Page Not Found</title>
                </Helmet>

                <div className="jumbotron" style={{
                    textAlign: 'center'
                }}>
                    <h3>Page <code>{this.props.location.pathname}</code> not found. &nbsp; Please <a href="/" style={{textDecoration: 'underline !important'}}>Get Back Home</a></h3>

                    <div><a href="/"><img src="/static/img/404.gif" style={{
                        width: '100%',
                        maxWidth: '700px'
                    }}/></a></div>

                    <div style={{
                        padding: '2rem',
                        color: '#bbb',
                        fontSize: '10px'
                    }}>credit: https://dribbble.com/shots/2597126-404-Got-Lost
                    </div>

                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Footer/>
            </div>
        )
    }
}