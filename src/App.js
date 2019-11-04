import React from 'react';
import Game from './components/Game'
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      playerOneWins: 0,
      playerOneLosses: 0,
      playerOneDraws: 0,
      playerTwoWins: 0,
      playerTwoLosses: 0,
      playerTwoDraws: 0
    };
  };

  persistGameData = () => {
    localStorage.setItem('playerOneWins', JSON.stringify(this.state.playerOneWins));
    localStorage.setItem('playerOneLosses', JSON.stringify(this.state.playerOneLosses));
    localStorage.setItem('playerOneDraws', JSON.stringify(this.state.playerOneDraws));
    localStorage.setItem('playerTwoWins', JSON.stringify(this.state.playerTwoWins));
    localStorage.setItem('playerTwoLosses', JSON.stringify(this.state.playerTwoLosses));
    localStorage.setItem('playerTwoDraws', JSON.stringify(this.state.playerTwoDraws));
  }

  gameOver = (winner, draw) => {
    if (draw) {
      this.setState({
        playerOneDraws: this.state.playerOneDraws + 1,
        playerTwoDraws: this.state.playerTwoDraws + 1
      });
      this.persistGameData();
    };

    if (winner === 'playerOne') {
      this.setState({
        playerOneWins: this.state.playerOneWins + 1,
        playerTwoLosses: this.state.playerTwoLosses + 1
      });
      this.persistGameData();
    } else if (winner === 'playerTwo') {
      this.setState({
        playerOneLosses: this.state.playerOneLosses + 1,
        playerTwoWins: this.state.playerTwoWins + 1
      });
      this.persistGameData();
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Game gameOver={this.gameOver} />
      </div>
    );
  };
};

export default App;
