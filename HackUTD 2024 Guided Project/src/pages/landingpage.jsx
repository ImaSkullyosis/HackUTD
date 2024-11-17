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

  let navigate = useNavigate();

  return (
    <>
    <h1 className = "poppins-bold text-3x1 text-red-400 "> filler name for our website</h1>


      <div className="wrapper">

        
        <h2>Select Your Concerns</h2>
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
