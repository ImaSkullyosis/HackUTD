import { useLocation } from "react-router-dom";
import "./advice.css";

function FindLowEffort({ arr }) {
  const loweffort = ["Smart Appliances", "Home Security", "Home Surveillance"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
        <div>
          For Smart Appliances, Home Security, or Home Surveillance consider
          checking out the following :{" "}
        </div>
        <div>
          Signal Strength: Ensure the appliance is within a reasonable range of
          your router. Signal strength diminishes with distance or physical
          obstructions.Avoid placing the router near other electronics or
          appliances that can interfere with Wi-Fi signals, such as microwaves.
        </div>
        <div>
          Restart Your Router and Devices: Turn off your router and smart
          appliance for about 10 seconds, then turn them back on. This can often
          resolve temporary connection issues.
        </div>
        <div>
          Switch to 2.4GHz Network: Many smart devices are optimized for 2.4 GHz
          Wi-Fi networks rather than 5 GHz due to its longer range. Check your
          router settings and connect the device to the 2.4 GHz network if
          available.
        </div>
        <div>
          Reduce Network Congestion: Disconnect devices that aren’t in use from
          the network. Too many devices connected simultaneously can slow down
          the connection.
        </div>
      </>
    );
  }
  return null;
}

function FindCar({ arr }) {
  const loweffort = ["Connected Vehicles"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    <>
      <div>For Connected Vehicles consider the following: </div>
      <div>
        Check for Manufacturer Issues: Contact the vehicle manufacturer or check
        their support website for any known connectivity issues or recalls.
      </div>
      <div>
        Seek Professional Help: Visit your dealership for a professional
        diagnosis if the problem persists.
      </div>
    </>;
  }
  return null;
}

function FindHighEffort({ arr }) {
  const loweffort = [
    "Streaming High Quality Video",
    "Online Gaming",
    "Downloading Large Files",
  ];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    <>
      <div>For heavy applications consider the following: </div>
      <div>
        Run Troubleshooting Tools: Most routers have a diagnostic tool
        accessible via their admin panel.
      </div>
      <div>
        Update Firmware: Log into your router's admin interface and check for
        firmware updates.
      </div>
      <div>
        Inspect Hardware: Ensure all cables (power, Ethernet, etc.) are securely
        connected and undamaged.
      </div>
    </>;
  }
  return null;
}

function FindLiveCalls({ arr }) {
  const loweffort = ["Live Video Calls"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    <>
      <div>For {element} consider the following: </div>
      <div>
        Software update: Ensure your video call app, device firmware, and
        operating system are up to date for optimal performance and
        compatibility.
      </div>
    </>;
  }
  return null;
}

function test() {
  const location = useLocation();
  const selected = location.state;

  const optional = [
    "Internet Speed",
    "Device Count",
    "Security",
    "Lack of Perks",
  ];

  return (
    <>
      <div className="adviceWrapper">
        <FindLowEffort arr={selected} />
        <FindCar arr={selected} />
        <FindHighEffort arr={selected} />
        <FindLiveCalls arr={selected} />
      </div>
    </>
  );
}

export default test;
