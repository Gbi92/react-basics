import { useState } from "react";

function Five() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.</h1>
      <input 
        type="text"
        onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 1}>Submit</button>
    </>
  )
}

export default Five;