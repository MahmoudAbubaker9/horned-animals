import React from 'react';

class HornedBeast extends React.Component {

    render() {

        return (
            <div>
                <h1>{this.props.title} </h1>
                <h4>{this.props.description} </h4>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}

export default HornedBeast;