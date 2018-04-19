import React from 'react';
// import './index.css';


class Player extends React.Component {
    render() {
        return (
          <div className="square" 
               style={{width: this.props.boxWidth }}>
            {this.props.content}
          </div>
        )
    }
}

class Target extends React.Component {
    render() {
        return (
            <div className="square" 
                 style={{width: this.props.boxWidth }}>
                 {this.props.content}
            </div>
        )
    }
}


class Cell extends React.Component {
    render() {
        return (
            <div className="cell" 
                 style={this.props.cellDim}>
                 {this.props.content}
            </div>
        );
    }
}

class Maze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: [null]
        }
        this.maxMazeSize = 500; // px
    }
    

    componentWillMount() {
        this.rows = parseInt(prompt('Enter box width: '), 10);
        this.cols = parseInt(prompt('Enter enter box height: '), 10);
        this.cells = this.rows * this.cols;
        this.size = this.maxMazeSize / this.cols;

        this.setState({
            cells: Array(this.cells).fill(null)
        })
    }

    componentDidMount() {
        
    }

    renderCell(content) {
        const size = this.size;

        // an equal width, and equal height cell
        return <Cell 
                   content={content} 
                   cellDim = {{width: `${size}px`, height: `${size}px`}} 
                   key = {content} 
                />
    }

    render() {

        const cells = this.state.cells;
        const allCells = [];
        cells.forEach(value => {
            allCells.push(this.renderCell(value));
        });

        return (
            <div className="maze">
              {allCells}
            </div>
        )
    }
}


export default Maze;