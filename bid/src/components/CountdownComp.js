import React from "react";
import { useEffect, useState } from "react";

export default function CountdownComp({ days }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(days) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div class="container border border-1 rounded-3" id="timerbox">
          <div class="row gx-0 ">
            <div class="col">{timeLeft.hours}</div>
            <div class="col">:</div>
            <div class="col">{timeLeft.minutes}</div>
            <div class="col">:</div>
            <div class="col">{timeLeft.seconds}</div>
          </div>
          <div class="row gx-0">
            <div class="col">Hours</div>
            <div class="col"></div>
            <div class="col">Minutes</div>
            <div class="col"></div>
            <div class="col">Seconds</div>
          </div>
        </div>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </>
  );
}
