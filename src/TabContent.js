import React from "react";
import "./App.css";

function TabContent({ richestPerson, activeTab, setActiveTab }) {
  return (
    <div className="tab-content">
      <div className="person-data">
        {/* <span>Age: {element.age}</span>
            <span>Networth: {element.net_worth}</span>
            <span>Country: {element.country}</span> */}
        <span>Age: {richestPerson[activeTab].age}</span>
        <span>Networth: {richestPerson[activeTab].net_worth}</span>
        <span>Country: {richestPerson[activeTab].country}</span>
      </div>
    </div>
  );
}

export default TabContent;
