import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
// librarry to generate IDs
import uuid from 'uuid/v4';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        // when using arrow f-ion, don't need this binding
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        let newBox = {...box, id: uuid()};
        this.setState(st => ({
            boxes: [...st.boxes, newBox] //  "existing 'boxes' == [...st.boxes] " + newBox
        }));

        // another legit version of this would be:
        // this.setState({
        //     boxes: [...this.state.boxes, newBox]
        // });
    }

    removeBox(boxId) {
        this.setState(st => ({
            // removing boxes that NOT contain passed boxId
            boxes: st.boxes.filter(box => box.id !== boxId)
        }));
    }

    renderBoxes() {
        return (
            <div>
                {this.state.boxes.map(box => (
                    <Box
                        remove={this.removeBox}

                        // #v2 passing removeBox() method using arrow function,
                        // and creating a NEW function inline:
                        // remove={() => this.removeBox(box.id)}

                        id={box.id} 
                        key={box.id} 
                        color={box.color} 
                        width={box.width} 
                        height={box.height}
                    />
                ))}
            </div> 
        )
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