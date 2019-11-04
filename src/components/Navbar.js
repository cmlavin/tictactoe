import React from 'react';
import { NavbarContainer } from './styles';

let playerOneWins = JSON.parse(localStorage.getItem('playerOneWins'))
let playerOneLosses = JSON.parse(localStorage.getItem('playerOneLosses'))
let playerOneDraws = JSON.parse(localStorage.getItem('playerOneDraws'))
let playerTwoWins = JSON.parse(localStorage.getItem('playerTwoWins'))
let playerTwoLosses = JSON.parse(localStorage.getItem('playerTwoLosses'))
let playerTwoDraws = JSON.parse(localStorage.getItem('playerTwoDraws'))

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        Player One: Wins: {playerOneWins} Losses: {playerOneLosses} Draws: {playerOneDraws}
      </div>
      <div>
        Player Two: Wins: {playerTwoWins} Losses: {playerTwoLosses} Draws: {playerTwoDraws}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
