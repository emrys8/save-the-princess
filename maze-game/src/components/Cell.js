import React from 'react';

class Cell extends React.Component {
    render() {
        return (
            <div className="cell" 
                 style={this.props.cellDim}>
                 {this.props.id}
            </div>
        );
    }
}

export default Cell;