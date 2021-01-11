import React, { useState } from "react";
import { totalTimelineHours } from "./utils";

const Timeline = () => {
  const [localState] = useState({
    times: [
      { title: "9:00", subTitle: "AM", hour: 0 },
      { title: "9:30", subTitle: "", hour: 30 },
      { title: "10:00", subTitle: "AM", hour: 60 },
      { title: "10:30", subTitle: "", hour: 90 },
      { title: "11:00", subTitle: "AM", hour: 120 },
      { title: "11:30", subTitle: "", hour: 150 },
      { title: "12:00", subTitle: "PM", hour: 180 },
      { title: "12:30", subTitle: "", hour: 210 },
      { title: "1:00", subTitle: "PM", hour: 240 },
      { title: "1:30", subTitle: "", hour: 270 },
      { title: "2:00", subTitle: "PM", hour: 300 },
      { title: "2:30", subTitle: "", hour: 330 },
      { title: "3:00", subTitle: "PM", hour: 360 },
      { title: "3:30", subTitle: "", hour: 390 },
      { title: "4:00", subTitle: "PM", hour: 420 },
      { title: "4:30", subTitle: "", hour: 450 },
      { title: "5:00", subTitle: "PM", hour: 480 },
      { title: "5:30", subTitle: "", hour: 510 },
      { title: "6:00", subTitle: "PM", hour: 540 },
      { title: "6:30", subTitle: "", hour: 570 },
      { title: "7:00", subTitle: "PM", hour: 600 },
      { title: "7:30", subTitle: "", hour: 630 },
      { title: "8:00", subTitle: "PM", hour: 660 },
      { title: "8:30", subTitle: "", hour: 690 },
      { title: "9:00", subTitle: "PM", hour: 720 },
    ],
  });

  const getTop = (time) => {
    return (time / totalTimelineHours) * 100;
  };

  return (
    <div className="Timeline-container">
      {localState.times.map((time) => (
        <div
          style={{
            position: "relative",
            textAlign: "right",
            top: getTop(time.hour) + "%",
          }}
        >
          <span className="Primary">{time.title}</span>
          <span className="Secondary"> {time.subTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
