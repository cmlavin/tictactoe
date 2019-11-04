import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOneActive: true,
      playerTwoActive: false,
      gameBoard: Array(9).fill(null),
      numSquaresClicked: 0,
      nextLetterX: true,
      draw: false
    };
  };

  handleBoardClick = index => {
    const gameBoard = this.state.gameBoard;
    const winner = this.determineWinner(gameBoard);

    this.props.gameOver(winner, this.state.draw);

    if (winner || gameBoard[index]) {
      return;
    };

    gameBoard[index] = this.state.nextLetterX ? 'X' : 'O';

    this.setState({
      playerOneActive: !this.state.playerOneActive,
      playerTwoActive: !this.state.playerTwoActive,
      gameBoard: gameBoard,
      nextLetterX: !this.state.nextLetterX,
      numSquaresClicked: this.state.numSquaresClicked + 1
    });
  };

  determineWinner = gameBoard => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
        return gameBoard[a] === 'X' ? 'playerOne' : 'playerTwo'
      }
    };

    if (this.state.numSquaresClicked === 9) {
      this.setState({
        draw: true
      })
    };

    return null;
  };

  render() {
    return (
      <div>
        <Board
          gameBoard={this.state.gameBoard}
          onClick={ index => this.handleBoardClick(index)}
        />
      </div>
    );
  };
};

Game.propTypes = {
  gameOver: PropTypes.func
};

export default Game;
