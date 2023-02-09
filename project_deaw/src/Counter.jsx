import './App.css';
import { useState } from "react";
import PropTypes from 'prop-types';

export const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubsstract = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1> Counter </h1>
      <h4> {counter} </h4>
      <br />
      <button onClick={() => handleAdd()}> +1 </button>
      <button onClick={() => handleSubsstract()}> -1 </button>
      <button onClick={() => handleReset()}> Reset </button>
      <br />
    </>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

Counter.defaultProps = {
  value: 0
}