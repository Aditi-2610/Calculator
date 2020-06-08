import React, { useState } from "react";
import "../App.css";

import Keypad from "./Keypad";
import Output from "./Output";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [result, setResult] = useState("");
  function buttonPress(buttonName) {
    try {
      if (buttonName === "=") {
        calculate();
      } else {
        if (buttonName === "C") {
          setResult("");
        } else if (buttonName === "CE") {
          setResult(prevResult => {
            return prevResult.slice(0, -1);
          });
        } else {
          setResult(prevButton => {
            return prevButton + buttonName;
          });
        }
      }
    } catch {
      setResult("error");
      setResult("");
    }
  }

  function calculate() {
    try {
      setResult(prevState => {
        if (
          prevState.substring(0, 1) === "%" ||
          prevState.substring(0, 1) === "*" ||
          prevState.substring(0, 1) === "/" ||
          prevState.substring(0, 1) === "e" ||
          prevState.substring(0, 1) === "="
        ) {
          setResult("error");
        } else {
          return eval(prevState);
        }
      });
    } catch (e) {
      setResult("error");
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="calc-body">
        <Output result={result} />
        <Keypad buttonPressed={buttonPress} />
      </div>
      <Footer />
    </div>
  );
}
