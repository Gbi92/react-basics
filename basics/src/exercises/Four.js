import { useState } from "react";

function Four() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Challenge: User should be able to type in any characters on input and those character should show in the browser.</h1>
      <input 
        type="text" 
        placeholder="Enter Text"
        value={text} 
        onChange={handleChange} />
      <p>{text}</p>
    </>
  );
}

export default Four;