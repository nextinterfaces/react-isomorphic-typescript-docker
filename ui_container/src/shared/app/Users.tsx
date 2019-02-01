import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../redux/actions/redux-actions'
import { Util } from "../../client/Util";
import { Spacer } from "./Spacer";
import { Footer } from "./Footer";

class Users extends React.Component<any> {

    static fetchData({ store }) {
        let _id = Math.floor(Math.random() * Math.floor(10))
        // console.log('_id, fetchData:', _id, store)
        return store.dispatch(actions.getName(_id))
    }

    componentDidMount() {
        let _id = Math.floor(Math.random() * Math.floor(10))
        this.props.getName(_id)
        Util.scrollTop()
    }

    render() {
        return (
            <div className='container'>

                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>NextInterfaces - Page 2</title>
                </Helmet>

                <h1>Users</h1>

                <hr/>
                <pre>
                    {!!this.props && JSON.stringify(this.props.USER, null, 2)}
                </pre>
                <Spacer/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.firstReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions as any, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Users)