import React from "react";

interface Props {
  icon: JSX.Element;
}

const ActionBtn = ({ icon }: Props) => {
  return <div className="action-btn">{icon}</div>;
};

export default ActionBtn;
