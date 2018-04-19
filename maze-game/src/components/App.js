import React from 'react';
import Row from './Row';
import Cell from './Cell';
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


class Maze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: [null]
        }
        this.maxMazeSize = 500; // width: 500px
        this.matrix = [];
    }
    

    componentWillMount() {
        this.rows = parseInt(prompt('Enter box width: '), 10);
        this.cols = parseInt(prompt('Enter enter box height: '), 10);
        this.cells = this.rows * this.cols;
        this.size = this.maxMazeSize / this.cols;

        this.setState({
            cells: Array(this.cells).fill(null)
        });

    }

    componentDidMount() {

    }

    render() {

        let row;
        for (let mRow = 0; mRow < this.rows; mRow++) {
            row = [];
            for (let cRow = 0; cRow < this.cols; cRow++) {
                row.push(`${mRow}${cRow}`);
            }

            this.matrix.push(row);
        }

        let size = Math.round(this.size);

        return (
            <div className="maze">
              {this.matrix.map((row, index) => 
                  <Row key = {index}>
                    {row.map(cellId => <Cell key = {cellId} id = "" cellDim = {{ width: `${size}px` }} />)}
                  </Row>
              )}
            </div>
        )
    }
}


export default Maze;