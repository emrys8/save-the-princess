import React from 'react';
import ReactDOM from 'react-dom';
import Maze from './components/App';
import './index.css';


// ReactDOM.render(
//     <Maze />,
//     document.getElementById('container')
// );

function initGame() {
    const boxWidth = prompt('Enter box width: ');
    const boxHeight = prompt('Enter box height: ');

    ReactDOM.render(
        <Maze width = {boxWidth} height={boxHeight} />,
        document.getElementById('container')
    );
}

initGame();