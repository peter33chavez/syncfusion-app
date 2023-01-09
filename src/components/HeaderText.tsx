import React from "react";

interface Props {
  header: string;
  className?: string;
  date?: string;
}

const HeaderText = ({ header, className, date }: Props) => {
  return (
    <div className={"header-text " + className}>
      <h2>{header}</h2>
      <h5>{date}</h5>
    </div>
  );
};

export default HeaderText;
