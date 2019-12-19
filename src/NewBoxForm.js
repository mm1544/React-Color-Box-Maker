import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "", width: "", height: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        console.log(this.state);
        this.setState({color: "", width: "", height: ""});
        
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='color'>Color</label>
                <input 
                    id='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Width</label>
                <input 
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='height'>Width</label>
                <input 
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;