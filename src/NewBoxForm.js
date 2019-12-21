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
        // resetting state to an empty string values
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
                <div>
                    <label htmlFor='color'>Color</label>
                    <input 
                        type='text'
                        id='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input 
                        type='text'
                        id='width'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input 
                        type='text'
                        id='height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;