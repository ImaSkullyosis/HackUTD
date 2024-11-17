import "./landingpage.css";
import { useNavigate } from "react-router-dom";
import Advice from "./advice.jsx";
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
        <div className="concernWrap">
          {possibleConcerns.map((issue, index) => (
            <h5 className="child" key={index}>
              {issue}
            </h5>
          ))}
        </div>
        <button className="submitIssues" onClick={() => navigate("/advice")}>
          Get Ideas
        </button>
      </div>
    </>
  );
}

export default land;
