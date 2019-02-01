import * as React from "react"

export class UserInfo extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        // axios.get(`/api/people/${params.userId}`).then(({ data: us er }) => {});
    }

    render() {
        return (
            <div>UserInfo comp</div>
        )
    }
}