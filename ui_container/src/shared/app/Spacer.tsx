import * as React from "react"

export class Spacer extends React.Component<any, any> {
    render() {
        return (
            <div className='spacer' style={...this.props.style}>&nbsp;</div>
        )
    }
}