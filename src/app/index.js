import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './store/counter';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <h3>{count}</h3>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment counter
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement counter
        </button>
      </div>
    </>
  );
}

export default App;
