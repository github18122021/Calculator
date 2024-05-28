import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState<string>("");

  const buttonArray = ["C", "/", "*", "←", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."];


  function buttonClicked(button: number | string) {
    // setInput((prev) => prev + button.toString());


    // clear the input
    if(button === "C") {
      setInput("");
      return;
    }

    // evaluate the input

    if((button === "=" && input !== "")) {
      try {
        // alert("Enter clicked")
        setInput(eval(input).toString());

        return;
      } catch (error) {
        
        // setInput(`Error: ${error}`);

        if(error instanceof SyntaxError) {
          setInput("Invalid operation");

          // setTimeout(() => {
          //   setInput("");
          // }, 2000);
        } else {
          setInput(`Error: ${error}`);
        }

        return;
      }
    }

    // backspace
    if(button === "←") {

      const newInput = input.slice(0, input.length - 1);
      setInput(newInput);

      // alert("clicked");
      return;
    }

    // setInput((prev) => prev + button.toString());

    // setting the display value
    setInput(function(prev) : string {

      if(prev === "Invalid operation") {
        return button.toString();
      }

      return prev + button.toString();
    })

  }

  function keyboardEvent(e : KeyboardEvent) {
    
    // alert(e.key);

    if(e.key === "Enter") {
      buttonClicked("=");
    }

    if(e.key === "Backspace") {
      buttonClicked("←");
    }

    if(e.key === "Escape") {
      buttonClicked("C");
    }

    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];

    if(validKeys.includes(e.key)) {
      buttonClicked(e.key);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyboardEvent);

    return () => {
      window.removeEventListener("keydown", keyboardEvent);
    }
  }, [input]);

  return (
    <div>
      <h1 className="text-green-800 font-bold text-center text-3xl mt-5">Calculator</h1>

      <div className="flex justify-center mt-10">
        <div className="bg-green-700 p-4 rounded-lg">
          <input type="text" className="w-80 h-12 text-2xl p-2 text-right" value={input} readOnly placeholder="00"/>
          <div className="grid grid-cols-4 gap-2 mt-5">

            {
              buttonArray.map((button, index) => {
                return <button key = {index} className="bg-gray-200 text-2xl rounded-lg" onClick={() => buttonClicked(button)}>{button}</button>
              })
            }

            {/* <button className="bg-gray-200 text-2xl rounded-lg">7</button>
            <button className="bg-gray-200 text-2xl rounded-lg">8</button>
            <button className="bg-gray-200 text-2xl rounded-lg">9</button>
            <button className="bg-gray-200 text-2xl rounded-lg">/</button>
            <button className="bg-gray-200 text-2xl rounded-lg">4</button>
            <button className="bg-gray-200 text-2xl rounded-lg">5</button>
            <button className="bg-gray-200 text-2xl rounded-lg">6</button>
            <button className="bg-gray-200 text-2xl rounded-lg">*</button>
            <button className="bg-gray-200 text-2xl rounded-lg">1</button>
            <button className="bg-gray-200 text-2xl rounded-lg">2</button>
            <button className="bg-gray-200 text-2xl rounded-lg">3</button>
            <button className="bg-gray-200 text-2xl rounded-lg">-</button>
            <button className="bg-gray-200 text-2xl rounded-lg">0</button>
            <button className="bg-gray-200 text-2xl rounded-lg">.</button>
            <button className="bg-gray-200 text-2xl rounded-lg">=</button>
            <button className="bg-gray-200 text-2xl rounded-lg">+</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
