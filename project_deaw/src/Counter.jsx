import { useCounter } from './hooks/useCounter';
import PropTypes from 'prop-types';

export const Counter = ({ value }) => {
  const { count, add, substract, reset } = useCounter(value)
  return (
    <>
      <h1> Counter </h1>
      <h4> {count} </h4>
      <br />
      <button onClick={() => add()}> +1 </button>
      <button onClick={() => substract()}> -1 </button>
      <button onClick={() => reset()}> RESET </button>
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