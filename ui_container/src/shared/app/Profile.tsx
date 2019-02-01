import * as React from "react"

export class Profile extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        // fetch(`https://api.twitter.com/us er/${handle}`).then((us er) => {})
    }

    render() {
        return (
            <div>Profile comp</div>
        )
    }
}