import React from "react";
import "./App.css";

function TabContent({ richestPerson }) {
  return (
    <div className="tab-content">
      <div className="person-data">
        <span>Age: {richestPerson.age}</span>
        <span>Networth: {richestPerson.net_worth}</span>
        <span>Country: {richestPerson.country}</span>
      </div>
    </div>
  );
}

export default TabContent;
