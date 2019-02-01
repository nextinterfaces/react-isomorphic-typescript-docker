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
    return { ...state.firstReducer, }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actions as any, dispatch)

@connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })

export class Conditions extends React.Component<any> {

    static fetchData({ store }) {
        return store.dispatch(actions.getConditions())
    }

    componentDidMount() {
        this.props.getConditions()
        Util.scrollTop()
    }

    render() {

        const list = this.props.CONDITIONS.map(e => {
            return <li key={e.id}>
                <Link to={'/conditions/' + Util.stringToCode(e.name)}>{e.name}</Link>
            </li>
        })

        return (
            <div className='container'>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>NextInterfaces - Page 3</title>
                </Helmet>

                <div className="jumbotron">
                    <h1>Page 3</h1>

                    <ul>
                        {list}
                    </ul>

                </div>

                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Footer/>
            </div>
        )
    }
}