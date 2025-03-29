import React from "react";
import "./App.css";

function TabButton({ richestPerson, activeTab, setActiveTab }) {
  
  return (
    <div className="tab-header">
      {richestPerson.map((person, index) => {
        return (
          <div
            key={person.name}
            className={`tab-button ${activeTab===index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {person.name}
          </div>
        );
      })}
    </div>
  );
}

export default TabButton;
