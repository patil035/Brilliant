import React, { useState } from "react";
import { totalTimelineHours, timelineDifference } from "./utils";

const LunchCalender = () => {
  const [localState] = useState({
    events: [
      { start: 300, end: 360 },
      { start: 310, end: 360 },
      { start: 420, end: 480 },
      { start: 300, end: 360 },
    ],
  });

  const getTop = (time) => {
    return (
      ((time.start - timelineDifference) / totalTimelineHours) * 100 +
      ((time.end - timelineDifference) / totalTimelineHours) * 100
    );
  };

  return (
    <div className="Calender-container">
      {localState.events.map((time, index) => {
        let isLunchMatch = false;
        if (index === 0) {
          isLunchMatch =
            localState.events.find((ev, i) => {
              if (i === 0) {
                return false;
              } else {
                return ev.start <= time.start && ev.end <= time.end;
              }
            }) || false;
        }

        return (
          <div
            className="event-conatiner"
            style={{
              position: "relative",
              height: "15%",
              background: "#fff",
              border: "0.5px solid lightgray",
              borderLeft:
                index === 0 && isLunchMatch
                  ? "5px solid green"
                  : index === 0
                  ? "5px solid black"
                  : "5px solid darkblue",
              top: getTop(time) + "%",
              width: "150px",
            }}
          >
            <span className="primary" style={{ paddingLeft: "10px" }}>
              {index === 0 ? "Me" : "Brilliant Lunch"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LunchCalender;
