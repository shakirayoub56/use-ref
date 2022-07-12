import InputBoxes from "./Components/InputBoxes";
import ScrollExample from "./Components/ScrollExample";
import Example from "./Components/TimerRef";
import Video from "./Components/Video";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Example />
      <Video />
      <ScrollExample />
      {/* <InputBoxes /> */}
    </div>
  );
}
