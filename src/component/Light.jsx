import React from "react";
import { useState } from "react";
import { useEffect } from "react";

let forGreen;
let forYellow;
let forRed;

const Light = (props) => {
  const colors = {
    red: {
      backgroundColor: "red",
    },
    yellow: {
      backgroundColor: "yellow",
    },
    green: {
      backgroundColor: "green",
    },
    grey: {
      backgroundColor: "grey",
    },
  };

  const [color, setColor] = useState({
    red: colors.red,
    yellow: colors.grey,
    green: colors.grey,
    next: "green",
  });

  // console.log("Props", props.time, props.isOn);
  const handeLightChange = () => {
    // clearTimeout(intervel);
    if (props.isOn === true) {
      switch (color.next) {
        case "green":
          forGreen = setTimeout(() => {
            setColor({
              red: colors.grey,
              yellow: colors.grey,
              green: colors.green,
              next: "yellow",
            });
          }, 50);
          break;
        case "yellow":
          forYellow = setTimeout(() => {
            setColor({
              red: colors.grey,
              yellow: colors.yellow,
              green: colors.grey,
              next: "red",
            });
          }, props.time);
          break;
        case "red":
          forRed = setTimeout(() => {
            setColor({
              red: colors.red,
              yellow: colors.grey,
              green: colors.grey,
              next: "green",
            });
          }, 1000);
          break;
      }
    } else {
      setColor({
        red: colors.red,
        yellow: colors.grey,
        green: colors.grey,
      });
    }
  };

  // useEffect(() => {
  //   handeLightChange();
  // }, [props.isOn]);

  if (props.isOn === true) {
    handeLightChange();
  }

  return (
    <>
      <div className="box">
        <div className="circle" style={color.red} />
        <div className="circle" style={color.yellow} />
        <div className="circle" style={color.green} />
      </div>
    </>
  );
};
export default Light;
