import { useState } from "react";
import Child from './Child';

function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );
  
  const handleClick = () => {
    setValue("Changed by Child")
  }

  return (
    <>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onclick={handleClick} />
      </div>
    </>
  );
}

export default Parent;