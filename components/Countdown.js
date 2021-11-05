import React from "react";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  return (
    <div className="countdown py-10">
      <h1 className="text-center text-5xl text-white py-10">
        Mint!
      </h1>

      <Countdown date={1634497200 * 1000} renderer={renderer} />
    </div>
  );
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  var dayDigits = ("" + days).split("");
  var hoursDigits = ("" + hours).split("");
  var minDigits = ("" + minutes).split("");
  var secDigits = ("" + seconds).split("");

  if (completed) {
    // Render a completed state
    return "";
  } else {
    // Render a countdown
    return (
      <div className="max-w-md mx-auto lusi">
        <div className="flex space-x-3">
          <div>
          {dayDigits.map((digit) => {
              return (
                <span className="text-3xl ml-2 px-4 bg-white text-black">{digit}</span>
              );
            })}
             <br />
              <p className="text-center">Days</p>
          </div>

         

          <div>
            {hoursDigits.map((digit) => {
              return (
                <span className="text-3xl ml-2 px-4 bg-white text-black">{digit}</span>
              );
            })}
             <br />
              <p className="text-center">Hours</p>
          </div>

          <div>
          {minDigits.map((digit) => {
              return (
                <span className="text-3xl ml-2 px-4 bg-white text-black">{digit}</span>
              );
            })}
             <br />
              <p className="text-center">Minutes</p>
           
          </div>

          <div>
          {secDigits.map((digit) => {
              return (
                <span className="text-3xl ml-2 px-4 bg-white text-black">{digit}</span>
              );
            })}
             <br />
              <p className="text-center">Seconds</p>
          </div>
        </div>
      </div>
    );
  }
};
