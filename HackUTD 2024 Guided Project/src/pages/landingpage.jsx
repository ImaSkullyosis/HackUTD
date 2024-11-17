import "./landingpage.css";
import { useNavigate } from "react-router-dom";
import Advice from "./advice.jsx";
function land() {
  const highlight = () => {
    alert("Clicked!");
  }

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
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
          {possibleConcerns.map((issue, index) => (
            <button key={index} onClick={highlight}>{issue}</button>
          ))}
        </div>
        <br></br>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button className="submitIssues" onClick={() => navigate("/advice")}>
            Get Ideas
          </button>
        </div>
      </div>
    </>
  );
}

export default land;
