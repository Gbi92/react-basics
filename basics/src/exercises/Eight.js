import { useState } from "react";

function Eight() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter += 1)}>Increment</button>
      <button onClick={() => counter > 0 && setCounter(counter -= 1)}>Decrement</button>
    </>
  )
}

export default Eight;