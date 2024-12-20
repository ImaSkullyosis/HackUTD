import { useState } from "react";
import { useNavigate } from "react-router-dom";

function land() {
  const possibleConcerns = [
    "Smart Appliances",
    "Live Video Calls",
    "Home Security",
    "Home Surveillance",
    "Connected Vehicles",
    "Streaming High Quality Video",
    "Online Gaming",
    "Downloading Large Files",
    "Internet Speed",
    "Device Count",
    "Security",
    "Lack of Perks",
  ];

  const [selected, setSelected] = useState([]);

  let navigate = useNavigate();

  const modify = (item) => {
    setSelected((prevList) => {
      if (prevList.includes(item)) {
        // Remove the string if it exists
        return prevList.filter((str) => str !== item);
      } else {
        // Add the string if it doesn't exist
        return [...prevList, item];
      }
    });
  };

  return (
    <>
      <h1>Fix your issues in a few clicks</h1>

      <div className="wrapper">
        <h2>Select Your Concerns</h2>
        <div className="concernWrap">
          {possibleConcerns.map((issue, index) => (
            <h6
              className={`child ${selected.includes(issue) ? "selected" : ""}`}
              key={index}
              onClick={() => modify(issue)}
            >
              {issue}
            </h6>
          ))}
        </div>

        <button
          className="submitIssues"
          onClick={() => navigate("/advice", { state: selected })}
        >
          Get Ideas
        </button>
      </div>
    </>
  );
}

export default land;
