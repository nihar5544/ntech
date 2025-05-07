import { useState } from "react";

const StarRating = ({ stars, onRated }) => {
  // const [value, setValue] = useState(stars);
  const [dynamicValue, setDynamicValue] = useState(stars);

  // const handleClick = (newValue) => {
  //   setValue(newValue);
  //   setDynamicValue(newValue);
  //   if (onRated) {
  //     onRated(newValue);
  //   }
  // };

  // const handleMouseEnter = (newValue) => {
  //   setDynamicValue(newValue);
  // };

  // const handleMouseLeave = () => {
  //   setDynamicValue(value);
  // };

  const starSpans = [];

  for (let v = 1; v <= 5; v++) {
    if (v <= dynamicValue) {
      starSpans.push(
        <span
          key={v}
          className="text-[#FFB803] text-2xl"
          // onMouseEnter={() => handleMouseEnter(v)}
          // onMouseLeave={handleMouseLeave}
          // onClick={() => handleClick(v)}
        >
          ★
        </span>
      );
    } else {
      starSpans.push(
        <span
          key={v}
          className="text-[#FFB803] text-2xl"
          // onMouseEnter={() => handleMouseEnter(v)}
          // onMouseLeave={handleMouseLeave}
          // onClick={() => handleClick(v)}
        >
          ☆
        </span>
      );
    }
  }

  return <div>{starSpans}</div>;
};

export default StarRating;
