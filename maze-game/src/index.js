import React from 'react';
import ReactDOM from 'react-dom';
import Maze from './components/App';
import './index.css';


// ReactDOM.render(
//     <Maze />,
//     document.getElementById('container')
// );

function initGame() {
    let boxWidth = parseInt(prompt('Please enter box width: '), 10);
    let boxHeight = parseInt(prompt('Please enter box height: '), 10);

    if (Number.isNaN(boxWidth) || Number.isNaN(boxHeight)) {
        [boxWidth, boxHeight] = [10, 10];
    }

    ReactDOM.render(
        <Maze width = {boxWidth} height={boxHeight} />,
        document.getElementById('container')
    );
}

initGame();