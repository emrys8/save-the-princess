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


class Square extends React.Component {
    render() {
        return (
            <div className="square" style={{width: this.props.boxWidth}}>
              {this.props.content}
            </div>
        );
    }
}

class Board extends React.Component {

    componentWillMount() {
        this.rows = parseInt(prompt('How many rows do you want?'), 10);
        this.cols = parseInt(prompt('How many columns do you want?'), 10);
        this.cells = this.row * this.cols;
        this.size = 500 / this.cols;
    }

    render() {
        let totalCells = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i === 2 && j === 2) {
                    totalCells.push(<Player content="P" boxWidth={`${this.size}px`} key = "22"/>);
                } else {
                    totalCells.push(<Square content={`${i}${j}`} boxWidth={`${this.size}px`} key = {`${i}${j}`.toString()}/>);
                }
            }
        }

        return (
            <div className="board">
              {totalCells}
            </div>
        )
    }
}


export default Board;