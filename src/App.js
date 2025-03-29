import React, { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import "./App.css";

const richestPerson = [
  {
    name: "Elon Musk",
    age: 53,
    net_worth: "$421.2 billion",
    businesses: [
      "SpaceX",
      "Tesla",
      "X (formerly Twitter)",
      "xAI",
      "Boring Co.",
    ],
    country: "United States",
    source: "Self-made",
    industry: ["Aerospace", "Automotive", "Technology"],
  },
  {
    name: "Jeff Bezos",
    age: 61,
    net_worth: "$233.5 billion",
    businesses: ["Amazon"],
    country: "United States",
    source: "Self-made",
    industry: ["E-commerce", "Technology"],
  },
  {
    name: "Mark Zuckerberg",
    age: 40,
    net_worth: "$202.5 billion",
    businesses: ["Meta (formerly Facebook)"],
    country: "United States",
    source: "Self-made",
    industry: ["Social Media", "Technology"],
  },
  {
    name: "Larry Ellison",
    age: 80,
    net_worth: "$209.7 billion",
    businesses: ["Oracle"],
    country: "United States",
    source: "Self-made",
    industry: ["Software", "Technology"],
  },
  {
    name: "Bernard Arnault",
    age: 75,
    net_worth: "$168.8 billion",
    businesses: ["LVMH (Luxury Goods)"],
    country: "France",
    source: "Self-made",
    industry: ["Luxury Goods", "Fashion"],
  },
];

function App() {
  const [active, setActive] = useState(0)
  return (
    <div className="app">
      <div className="myapp">
        <TabButton richestPerson={richestPerson} active={active} setActive={setActive}/>
        <TabContent richestPerson={richestPerson[0]} active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default App;
