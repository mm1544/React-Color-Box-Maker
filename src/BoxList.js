import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid/v4';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            boxes: [
                {color: "blue", width: "10", height: "20", id: uuid()},
                {color: "red", width: "30", height: "15", id: uuid()},
                {color: "black", width: "200", height: "105", id: uuid()}
            ]
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        let newBox = {...box, id: uuid()};
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }));
    }

    renderBoxes() {
        return (
            <div>
                {this.state.boxes.map(box => (
                    <div key={box.id}>
                        <Box remove={this.removeBox} id={box.id} key={box.id} color={box.color} width={box.width} height={box.height}/>
                    </div>
                ))}
            </div> 
        )
    }

    removeBox(boxId) {
        this.setState(st => ({
            boxes: st.boxes.filter(n => n.id !== boxId)
        }));
    }

    render() {
        return (
            <div className="BoxList">
                <h2>BoxList</h2>
                <NewBoxForm addBox={this.addBox} />
                {this.renderBoxes()}
            </div>

        )
    }
}

export default BoxList;