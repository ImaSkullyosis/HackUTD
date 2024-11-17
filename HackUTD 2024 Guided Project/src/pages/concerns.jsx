import "./concerns.css";
import { useState } from "react";

function ConcernButton({ label }) {
    return <button>{ label }</button>
}

function ButtonGroup() {
    return (
        <div>
            <div>
                <ConcernButton label="Smart Appliances" />
                <ConcernButton label="Live Video Calls" />
                <ConcernButton label="Home Security" />
                <ConcernButton label="Home Surveillance" />
                <ConcernButton label="Connected Vehicles" />
                <ConcernButton label="Streaming Videos" />
                <ConcernButton label="Online Gaming" />
                <ConcernButton label="Downloading Files" />
            </div>
            <div>
                <ConcernButton label="Multiple Rooms" />
                <ConcernButton label="Multiple Devices" />
                <ConcernButton label="Outages" />
                <ConcernButton label="Security" />
                <ConcernButton label="Password Management" />
                <ConcernButton label="Anti-Virus" />
                <ConcernButton label="Identity Protection" />
                <ConcernButton label="YouTube TV" />
            </div>
        </div>
    );
}

export default ButtonGroup;