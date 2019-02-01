import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as actions from '../redux/actions/redux-actions'
import { Util } from "../../client/Util";
import { Spacer } from "./Spacer";
import { Footer } from "./Footer";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return { ...state.firstReducer, }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actions as any, dispatch)

@connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })
export class ConditionInfo extends React.Component<any> {

    static fetchData({ store, params }) {
        return store.dispatch(actions.getCondition(params.id))
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        Util.scrollTop()
        this.props.getCondition(id)
    }

    render() {

        const { match: { params: { id } }, CONDITION_INFO } = this.props

        return (

            <div className='container'>

                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{Util.codeToString(id)}</title>
                </Helmet>

                <h1>{Util.codeToString(id)}</h1>

                <hr/>
                <h3>{CONDITION_INFO}</h3>
                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Footer/>
            </div>
        )
    }
}
