import { useState } from "react";

function Three() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <>
      <h1>Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed</h1>
      <button onClick={handleClick}>{show ? "Hide" : "Show"} Element Below</button>
      {show && <div>Toggle Challenge</div>}
    </>
  );
}

export default Three;