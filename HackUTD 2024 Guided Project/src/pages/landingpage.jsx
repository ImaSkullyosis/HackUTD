import "./landingpage.css";
import { useNavigate } from "react-router-dom";

function land() {
  const possibleConcerns = [
    "Smart Appliances",
    "Live Video Calls",
    "Home Security",
    "Home Survailance",
    "Connected Vehicles",
    "Streaming High Quality Video",
    "Online Gaming",
    "Downloading Large Files",
    "Internet Speed",
    "Device Count",
    "Security",
    "Lack of Perks",
  ];

  let navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <h1 color="white">Select Your Concerns</h1>
        <div>
          {possibleConcerns.map((issue, index) => (
            <div key={index}>{issue}</div>
          ))}
        </div>
        <button
          className="submitIssues"
          onClick={() => navigate("/advice.jsx")}
        >
          Get Ideas
        </button>
      </div>
    </>
  );
}

export default land;
