import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { BoardContainer, RowContainer } from './styles';

class Board extends React.Component {
  renderSquare = index => {
    return (
      <Square
        value={this.props.gameBoard[index]}
        onClick={() => this.props.onClick(index)}
      />
    );
  };

  render() {
    return (
      <BoardContainer>
        <RowContainer>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </RowContainer>
        <RowContainer>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </RowContainer>
        <RowContainer>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </RowContainer>
      </BoardContainer>
    );
  };
};

Board.propTypes = {
  gameBoard: PropTypes.array,
  onClick: PropTypes.func
};

export default Board;
