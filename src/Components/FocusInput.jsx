import { useEffect, useRef } from "react";

function FocusInput() {
  const ref = useRef(null); // HTMLRef

  console.log(ref); // { current: null }
  useEffect(() => {
    console.log(ref); // { current: HTMLInputElement }
    ref.current.focus();
  }, []);

  return (
    <div>
      <input placeholder="type something" ref={ref} />
    </div>
  );
}

export default FocusInput;
