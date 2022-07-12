import { useRef, useState } from "react";

let size = 4;
function InputBoxes() {
  const [inputBoxState, setInputState] = useState(new Array(4).fill(""));
  const ref = useRef(new Array(4).fill(0));

  return (
    <div>
      {inputBoxState.map((input, index) => (
        <input
          ref={(elem) => (ref.current[index] = elem)}
          style={{ width: "1rem", height: "2rem", margin: 2 }}
        />
      ))}
    </div>
  );
}

export default InputBoxes;
