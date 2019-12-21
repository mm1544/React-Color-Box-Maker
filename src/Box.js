import React, { Component } from 'react'

class Box extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt) {
        this.props.remove(this.props.id);
    }

    render() {
        const boxStyle = {
            backgroundColor: this.props.color,
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
        }
        return (
            <div>
                <div className="Box" style={boxStyle}></div>
                <button onClick={this.handleRemove}>X</button>
                {/* #v2 When using arrow function to pass a method removeBox() */}
                {/* <button onClick={this.props.remove}>X</button> */}
            </div>
        )
    }
}

export default Box;