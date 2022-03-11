import { useState } from "react";

function Seven() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>Challenge: Make this app work like a calculator that can add two numbers.</h1>
      <h2>Adding Two Numbers</h2>
      <input 
        placeholder="First Number" 
        type="number" 
        onChange={(e) => setNumber1(Number(e.target.value))} />
      <input 
        placeholder="Second Number" 
        type="number"
        onChange={(e) => setNumber2(Number(e.target.value))} />

      <button onClick={() => setTotal(number1 + number2)}>Add Two Numbers</button>
      <p>Total: {total || ""}</p>
    </>
  )
}

export default Seven;