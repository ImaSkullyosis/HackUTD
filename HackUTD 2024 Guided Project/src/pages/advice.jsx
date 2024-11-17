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
          <strong>Signal Strength:</strong> 
          <ul>

          </ul>
          Ensure the appliance is within a reasonable range of
          your router. Signal strength diminishes with distance or physical
          obstructions.Avoid placing the router near other electronics or
          appliances that can interfere with Wi-Fi signals, such as microwaves.
        </div>
        <div>
          <strong>Restart Your Router and Devices:</strong> 
          <ul>
          Turn off your router and smart
          appliance for about 10 seconds, then turn them back on. This can often
          resolve temporary connection issues.
          </ul>
          
        </div>
        <div>
          <strong>Switch to 2.4GHz Network:</strong> 
          <ul>
          Many smart devices are optimized for 2.4 GHz
          Wi-Fi networks rather than 5 GHz due to its longer range. Check your
          router settings and connect the device to the 2.4 GHz network if
          available.
          </ul>
         
        </div>
        <div>
          <strong>Reduce Network Congestion:</strong> 
          <ul>
          Disconnect devices that aren’t in use from
          the network. Too many devices connected simultaneously can slow down
          the connection.
          </ul>
          
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
          <strong>Check for Manufacturer Issues:</strong>
          <ul>
          Check for Manufacturer Issues: Contact the vehicle manufacturer or
          check their support website for any known connectivity issues or
          recalls.
          </ul>

        </div>
        <div>
          <strong>Seek Professional Help:</strong> 
          <ul>
          Visit your dealership for a professional
          diagnosis if the problem persists.
          </ul>

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
          <strong>Run Troubleshooting Tools:</strong> 
          <ul>
          Most routers have a diagnostic tool
          accessible via their admin panel.
          </ul>
          
        </div>
        <div>
          <strong>Update Firmware:</strong> 
          <ul>
          Log into your router's admin interface and check for
          firmware updates.
          </ul>
          
        </div>
        <div>
          <strong>Inspect Hardware:</strong> 
          <ul>
          Ensure all cables (power, Ethernet, etc.) are
          securely connected and undamaged.
          </ul>
          
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
          <strong>Software update:</strong>
          <ul> Ensure your video call app, device firmware, and
          operating system are up to date for optimal performance and
          compatibility.
          </ul> 
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
            Test your speed using an online speed test tool to confirm your current internet performance.
            Consider upgrading your plan if your current speed doesn't meet your needs, especially with multiple users or devices.
          </ul>
        </div>
        <div>
          <strong>Device Count:</strong> 
          <ul>
            Check how many devices are connected to your network. If you have more than 25 devices, disconnect unused devices to free up network bandwidth.
            Upgrade to the latest generation WiFi Router or consider adding more extenders. 
                Specific Product Reccomendations: Whole-Home Wi-Fi  
          </ul>
        </div>
        <div>
          <strong>Security:</strong> 
          <ul>
            Ensure your Wi-Fi network is secured with WPA3 or WPA2 encryption.
            Change your router's default admin password to prevent unauthorized access.
          </ul>
        </div>
        <div>
          <strong>Lack of Perks:</strong> 
          <ul>
            Explore value-added services offered by your provider, such as enhanced security, parental controls, or streaming bundles.
            Consider switching to a provider that includes perks like free equipment upgrades or discounts on other services.
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
