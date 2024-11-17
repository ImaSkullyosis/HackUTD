import { useLocation } from "react-router-dom";
import "./advice.css";

function FindLowEffort({ arr }) {
  const loweffort = ["Smart Appliances", "Home Security", "Home Surveillance"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
      <div className="wrapper">
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
      </div>

      </>
    );
  }
}

function FindCar({ arr }) {
  const loweffort = ["Connected Vehicles"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
      <div className="wrapper">
      <div>For Connected Vehicles consider the following: </div>
        <div>
          Check for Manufacturer Issues: Contact the vehicle manufacturer or
          check their support website for any known connectivity issues or
          recalls.
        </div>
        <div>
          Seek Professional Help: Visit your dealership for a professional
          diagnosis if the problem persists.
        </div>
      </div>

      </>
    );
  }
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
    return (
      <>
      <div className="wrapper">
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
          Inspect Hardware: Ensure all cables (power, Ethernet, etc.) are
          securely connected and undamaged.
        </div>
      </div>

      </>
    );
  }
}

function FindLiveCalls({ arr }) {
  const loweffort = ["Live Video Calls"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
      <div className="wrapper">
      <div>For Live Video Calls consider the following: </div>
        <div>
          Software update: Ensure your video call app, device firmware, and
          operating system are up to date for optimal performance and
          compatibility.
        </div>
      </div>

      </>
    );
  }
}


function FindConnectivityConcerns({ arr }) {
  const loweffort = ["Internet Speed", "Device Count", "Security", "Lack of Perks"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
      <div className="wrapper">
      <div>For concerns related to Internet Speed, Device Count, Security, or Lack of Perks, consider the following:</div>
        <div>
          <strong>Internet Speed:</strong> 
          <ul>
            <li>Test your speed using an online speed test tool to confirm your current internet performance.</li>
            <li>Consider upgrading your plan if your current speed doesn't meet your needs, especially with multiple users or devices.</li>
          </ul>
        </div>
        <div>
          <strong>Device Count:</strong> 
          <ul>
            <li>Check how many devices are connected to your network. If you have more than 25 devices, disconnect unused devices to free up network bandwidth.</li>
            <li>Upgrade to the latest generation WiFi Router or consider adding more extenders. 
              Specific Product Reccomendations: Whole-Home Wi-Fi  </li>
          </ul>
        </div>
        <div>
          <strong>Security:</strong> 
          <ul>
            <li>Ensure your Wi-Fi network is secured with WPA3 or WPA2 encryption.</li>
            <li>Change your router's default admin password to prevent unauthorized access.</li>
          </ul>
        </div>
        <div>
          <strong>Lack of Perks:</strong> 
          <ul>
            <li>Explore value-added services offered by your provider, such as enhanced security, parental controls, or streaming bundles.</li>
            <li>Consider switching to a provider that includes perks like free equipment upgrades or discounts on other services.</li>
          </ul>
        </div>
      </div>

      </>
    );
  }
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
        <FindConnectivityConcerns arr={selected} />
      </div>
    </>
  );
}

export default test;
