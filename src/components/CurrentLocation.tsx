import React from "react";

interface Props {
  data: any;
}

const CurrentLocation = ({ data }: Props) => {
  const {
    location: { name },
    current: { temp_f: temp, condition },
  } = data;
  return (
    <div className="px-10 py-5 current-location">
      <h5>{name}</h5>
      <h4>{temp}°</h4>
      <p>{condition.text}</p>
    </div>
  );
};

export default CurrentLocation;
