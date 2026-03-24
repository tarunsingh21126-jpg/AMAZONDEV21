import { useState } from "react";

const ColorButtons = () => {
  const [color, setColor] = useState("Red");

  return (
    <div>
      <h5 className="mb-3">Color</h5>

      <div className="btn-group" role="group">
        {/* Red */}
        <input
          type="radio"
          className="btn-check"
          name="color"
          id="red"
          checked={color === "Red"}
          onChange={() => setColor("Red")}
        />
        <label className="btn btn-outline-danger" htmlFor="red">
          Red
        </label>

        {/* Blue */}
        <input
          type="radio"
          className="btn-check"
          name="color"
          id="blue"
          checked={color === "Blue"}
          onChange={() => setColor("Blue")}
        />
        <label className="btn btn-outline-primary" htmlFor="blue">
          Blue
        </label>

        {/* Green */}
        <input
          type="radio"
          className="btn-check"
          name="color"
          id="green"
          checked={color === "Green"}
          onChange={() => setColor("Green")}
        />
        <label className="btn btn-outline-success" htmlFor="green">
          Green
        </label>
      </div>

      <p className="mt-3">
        Selected: <b>{color}</b>
      </p>
    </div>
  );
};

export default ColorButtons;