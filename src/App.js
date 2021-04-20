import React from "react";
import "./style.scss";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function App() {
  return (
    <div className="container">
      <ChildA />
      <ChildB />
    </div>
  );
}
