import { useState } from "react";
import ShapeDemo from "./components/ShapeDemo";
import ColorDemo from "./components/ColorDemo";
import SizeDemo from "./components/SizeDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemo = (type) => {
    setSelectedDemo(type);
  };

  return (
    <div>
      <div>
        <h1>React Lazy load explained</h1>

        <div className="flex gap-x-5 pt-5">
          <button
            className="bg-amber-300 px-4 py-2 rounded-2xl"
            onClick={() => selectDemo("shape")}
          >
            Shape Demo
          </button>
          <button
            className="bg-green-300 px-4 py-2 rounded-2xl"
            onClick={() => selectDemo("color")}
          >
            Color Demo
          </button>
          <button
            className="bg-blue-300 px-4 py-2 rounded-2xl"
            onClick={() => selectDemo("size")}
          >
            Size Demo
          </button>
        </div>

        <div>
          {selectedDemo === "shape" && <ShapeDemo />}
          {selectedDemo === "color" && <ColorDemo />}
          {selectedDemo === "size" && <SizeDemo />}
        </div>
      </div>
    </div>
  );
}
