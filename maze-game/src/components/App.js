import React from 'react';
import shortid from 'shortid';
import _ from 'lodash';
import Row from './Row';
import Cell from './Cell';


class Player extends React.Component {
    render() {
        // return (
        //   <div className="cell player" 
        //        style={{width: this.props.boxWidth }}
        //        onClick={this.props.onClick}>
        //     {this.props.content}
        //   </div>
        // )

        return (
            
              <img className="player"
                 style = {{width: this.props.boxWidth}}
                 onClick={this.props.onClick}
                 src={this.props.imageSrc}
                 alt={this.props.attribText}
              />
        )
    }
}

class Target extends React.Component {
    render() {
        return (
                <img className="player"
                    style={{width: this.props.boxWidth }}
                    onClick={this.props.onClick}
                    src={this.props.imageSrc}
                    alt={this.props.attribText}
                />
        )
    }
}

class Maze extends React.Component {
    constructor(props) {
        super(props);

        const matrix = this.getMatrix();
        const boardCells = flattenMatrix(matrix);

        this.state = {
            cells: boardCells
        }

        this.maxBoardSize = 500; // 500px
        this.cellWidth = this.maxBoardSize / this.props.height;

        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const cells = this.state.cells.slice();
        const randNums = getRandomNum(cells);
        const marioCell = getRandomNum(cells, 1)[0];
        
        randNums.splice(randNums.indexOf(marioCell), 1);

        const marioIdx = getRandomCellIdx(cells, marioCell);

        const mario = <Player boxWidth="40%" 
                              imageSrc="./assets/mario.png"
                              attribText="Jumping Mario"
                              onClick = {this.handleClick} />
        
        cells[marioIdx] = mario;
        this.setState({
            cells
        });

        // add princesses
        randNums.map(num => {
            let pIndex = getRandomCellIdx(cells, num);
            const princess = <Target boxWidth="40%"
                                     imageSrc="./assets/princess.png"
                                     attribText="A pretty princess with a crown" 
                              />
            cells[pIndex] = princess;
        });
    }

    handleClick() {
        // to be implemented
        alert('Moving Mario to save princesses...');
    }

    getMatrix() {
        const cols = this.props.height;
        const rows = this.props.width;
        
        const matrix = [];
        let row;

        for (let rowx = 0; rowx < rows; rowx++) {
            row = [];
            for (let col = 0; col < cols; col++) {
                row.push(<p></p>);
            }

            matrix.push(row);
        }
        return matrix;
    }


    render() {

        return (
            <div className="maze">
              {this.state.cells.map(cell =>
              <Cell 
                 id={cell} 
                 key = {shortid.generate()}
                 cellDim={{width: `${this.cellWidth}px`}}
                 />
            )}
            </div>
        )
    }
}

/**
 * @function
 * @param {Number[][]} matrix
 * @return {[Number]}
 * Returns a flattened array
 */
function flattenMatrix(matrix) {
    const flatMatrix = _.flatten(matrix);
    return flatMatrix;
}

/**
 * 
 * @function getRandomNum
 * @param {[Number]} array
 * @param {Number} size
 * @return {[Number]}
 * Returns a random collection of numbers
 */
function getRandomNum(array, size=10) {
    const randCells = _.sampleSize(array, size);
    return randCells;
}

/**
 * @function getRandomCellIdx
 * @param {[Number]} arr
 * @param {Number} num
 * @return {Number}
 * Returns the zero-based index of 'num' in 'arr'
 */
function getRandomCellIdx(arr, num) {
    return arr.indexOf(num);
}

export default Maze;