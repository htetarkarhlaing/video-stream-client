import { useState } from "react";
import Login from "./pages/Login";
import Video from "./pages/Video";
import "remixicon/fonts/remixicon.css";

function App() {
  const [key, setKey] = useState<string>("");
  return (
    <div className="App h-screen w-screen flex flex-row justify-center items-start">
      {key ? (
        <Video key={key} onChange={setKey} />
      ) : (
        <Login onChange={setKey} />
      )}
    </div>
  );
}

export default App;
