import React from 'react';

//returns an ever-increasing number <count> using the same logic as useInterval.js

function useIncrementingNumber(delay) {
  const [count, setCount] = React.useState(0);

  const savedCallback = React.useRef(() => setCount(c => c + 1));

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return count;
}

export default useIncrementingNumber;