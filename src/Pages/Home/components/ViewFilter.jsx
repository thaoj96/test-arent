import React from "react";
import { IconBgFilter, IconCoffee, IconFilter1 } from "../../../Icons/orther";

export default function ViewFilter() {
  return (
    <div
      className="flex-row"
      style={{ justifyContent: "center", margin: "25px 0 25px 0" }}
    >
      {[
        {
          icon: <IconFilter1 />,
          text: "Morning",
        },
        {
          icon: <IconFilter1 />,
          text: "Lunch",
        },
        {
          icon: <IconFilter1 />,
          text: "Dinner",
        },
        {
          icon: <IconCoffee />,
          text: "Snack",
        },
      ].map((item, index) => (
        <div
          style={{
            position: "relative",
            margin: "0 42px 0 42px",
            color: "#FFF",
            cursor: "pointer",
          }}
          key={index.toString()}
        >
          <div
            style={{
              position: "absolute",
              width: 116,
              height: 134,
              justifyContent: "center",
            }}
            className="flex-column"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>

          <IconBgFilter />
        </div>
      ))}
    </div>
  );
}
