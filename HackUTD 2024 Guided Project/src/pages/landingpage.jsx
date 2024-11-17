import { useState } from "react";
import "./landingpage.css";
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
      <div className="wrapper">
        <h1>Select Your Concerns</h1>
        <div className="concernWrap">
          {possibleConcerns.map((issue, index) => (
            <h5 className="child" key={index} onClick={() => modify(issue)}>
              {issue}
            </h5>
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
