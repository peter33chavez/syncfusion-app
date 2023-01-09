import React from "react";

interface Props {
  icon: JSX.Element;
  value: string;
  title: string;
  className: string;
}

const Card = ({ icon, value, title, className }: Props) => {
  return (
    <div className={"card shadow-sm " + className}>
      {icon}
      <div className="card-details">
        <p>{title}</p>
        <h6>{value}</h6>
      </div>
    </div>
  );
};

export default Card;
