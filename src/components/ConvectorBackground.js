import React from "react";
import { useState } from "react";
import "../App.css";

export default function ConvectorBackground() {
  const [form, setForm] = useState({
    rgb: "rgb(255, 255, 255)",
    hex: "",
    text: "rgb()",
  });

  const backroundStyle = {
    backgroundColor: form.rgb,
  };

  const handkeChange = (evt) => {
    function validator(value) {
      let mas = ["a", "b", "c", "d", "f"];
      if ((value >= 0 && value < 10) || mas.includes(value)) {
        return value;
      }
    }

    if (evt.target.value.length === 7) {
      let color = [];

      for (let i = 1; i < evt.target.value.length; i = i + 2) {
        let value1 = validator(evt.target.value[i]);
        let value2 = validator(evt.target.value[i + 1]);
        if (value1 && value2) {
          color.push(parseInt(`${value1}${value2}`, 16));
        } else {
          setForm((prevForm) => ({
            ...prevForm,
            rgb: "rgb(255, 255, 255)",
            text: "Ошибка!",
          }));
        }
      }

      color.length === 3
        ? setForm((prevForm) => ({
            ...prevForm,
            rgb: `rgb(${color[0]},${color[1]},${color[2]})`,
            text: `rgb(${color[0]},${color[1]},${color[2]})`,
          }))
        : setForm((prevForm) => ({
            ...prevForm,
            rgb: "rgb(255, 255, 255)",
            text: "Ошибка!",
          }));
    } else if (evt.target.value.length > 7) {
      setForm((prevForm) => ({
        ...prevForm,
        rgb: "rgb(255, 255, 255)",
        text: "Ошибка!",
      }));
    } else {
      setForm((prevForm) => ({ ...prevForm, rgb: "rgb()" }));
    }
  };

  return (
    <div className="container" style={backroundStyle}>
      <div className="form">
        <input
          type="text"
          defaultValue="#"
          name="hex"
          onChange={handkeChange}
        />
        <p>{form.text}</p>
      </div>
    </div>
  );
}
