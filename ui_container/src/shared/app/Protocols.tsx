import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../redux/actions/redux-actions'


import { Button, Col, DropdownItem, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Row } from 'reactstrap';
import { Util } from "../../client/Util";
import { Spacer } from "./Spacer";
import { Footer } from "./Footer";

import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    console.log('> Protocols state:', state)

    return { ...state.secondReducer, }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actions as any, dispatch)

@connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })

export class Protocols extends React.Component<any> {

    static fetchData({ store }) {
        return store.dispatch(actions.getProtocols())
    }

    componentWillMount() {
        this.props.getProtocols()
        Util.scrollTop()
    }

    render() {
        const list = this.props.PROTOCOLS.map(e => {
            return <li key={e.id}><a href={'/protocols/' + e.id}>{e.name}</a></li>
        })

        return (
            <div className='container'>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>NextInterfaces - Page 4</title>
                </Helmet>

                <div>
                    <div className="jumbotron">
                        <h1>Page 4</h1>

                        {list}

                    </div>
                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Footer/>
            </div>
        )
    }
}