import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const Square = props => {
  return (
    <Button onClick={props.onClick}>
      {props.value}
    </Button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func
};

export default Square;
