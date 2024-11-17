import { useLocation } from "react-router-dom";
import "./advice.css";

function FindLowEffort({ arr }) {
  const loweffort = ["Smart Appliances", "Home Security", "Home Surveillance"];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
        <div className="wrapperadvice">
          <h1>
            For Smart Appliances, Home Security, or Home Surveillance consider
            checking out the following :
          </h1>

          <h4>Signal Strength:</h4>
          <h5>
            Ensure the appliance is within a reasonable range of your router.
            Signal strength diminishes with distance or physical
            obstructions.Avoid placing the router near other electronics or
            appliances that can interfere with Wi-Fi signals, such as
            microwaves.
          </h5>

          <h4>Restart Your Router and Devices:</h4>
          <h5>
            Turn off your router and smart appliance for about 10 seconds, then
            turn them back on. This can often resolve temporary connection
            issues.
          </h5>

          <h4>Switch to 2.4GHz Network:</h4>
          <h5>
            Many smart devices are optimized for 2.4 GHz Wi-Fi networks rather
            than 5 GHz due to its longer range. Check your router settings and
            connect the device to the 2.4 GHz network if available.
          </h5>

          <h4>Reduce Network Congestion:</h4>
          <h5>
            Disconnect devices that aren’t in use from the network. Too many
            devices connected simultaneously can slow down the connection.
          </h5>
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
        <div className="wrapperadvice">
          <h1>For Connected Vehicles consider the following: </h1>

          <h4>Check for Manufacturer Issues:</h4>
          <h5>
            Check for Manufacturer Issues: Contact the vehicle manufacturer or
            check their support website for any known connectivity issues or
            recalls.
          </h5>
          <h4>Seek Professional Help:</h4>
          <h5>
            Visit your dealership for a professional diagnosis if the problem
            persists.
          </h5>
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
        <div className="wrapperadvice">
          <h1>For heavy applications consider the following: </h1>
          <h4>Run Troubleshooting Tools:</h4>
          <h5>
            Most routers have a diagnostic tool accessible via their admin
            panel.
          </h5>

          <h4>Update Firmware:</h4>
          <h5>
            Log into your router's admin interface and check for firmware
            updates.
          </h5>

          <h4>Inspect Hardware:</h4>
          <h5>
            Ensure all cables (power, Ethernet, etc.) are securely connected and
            undamaged.
          </h5>
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
        <div className="wrapperadvice">
          <h1>For Live Video Calls consider the following: </h1>
          <h4>Software update:</h4>
          <h5>
            Ensure your video call app, device firmware, and operating system
            are up to date for optimal performance and compatibility.
          </h5>
        </div>
      </>
    );
  }
}

function FindConnectivityConcerns({ arr }) {
  const loweffort = [
    "Internet Speed",
    "Device Count",
    "Security",
    "Lack of Perks",
  ];
  const modi = Object.values(arr);
  const match = modi.some((element) => loweffort.includes(element));
  if (match) {
    return (
      <>
        <div className="wrapperadvice">
          <h1>
            For concerns related to Internet Speed, Device Count, Security, or
            Lack of Perks, consider the following:
          </h1>
          <h4>Internet Speed:</h4>
          <h5>
            Test your speed using an online speed test tool to confirm your
            current internet performance. Consider upgrading your plan if your
            current speed doesn't meet your needs, especially with multiple
            users or devices.
          </h5>

          <h4>Device Count:</h4>
          <h5>
            Check how many devices are connected to your network. If you have
            more than 25 devices, disconnect unused devices to free up network
            bandwidth. Upgrade to the latest generation WiFi Router or consider
            adding more extenders. Specific Product Reccomendations: Whole-Home
            Wi-Fi
          </h5>

          <h4>Security:</h4>
          <h5>
            Ensure your Wi-Fi network is secured with WPA3 or WPA2 encryption.
            Change your router's default admin password to prevent unauthorized
            access.
          </h5>

          <h4>Lack of Perks:</h4>
          <h5>
            Explore value-added services offered by your provider, such as
            enhanced security, parental controls, or streaming bundles. Consider
            switching to a provider that includes perks like free equipment
            upgrades or discounts on other services.
          </h5>
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
