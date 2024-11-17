import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./advice.css";
function test() {
  const location = useLocation();
  const selected = location.state;
  console.log(selected);
  return <></>;
}

export default test;
