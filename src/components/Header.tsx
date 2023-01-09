import React from "react";
import ActionBtn from "./ActionBtn";
import HeaderText from "./HeaderText";
import SearchBar from "./SearchBar";
import { AiOutlinePlus } from "react-icons/ai";
import { FaBell } from "react-icons/fa";

interface Props {
  saveLocation: () => void;
}
const Header = ({ saveLocation }: Props) => {
  return (
    <>
      <div className="header px-10 py-5">
        <HeaderText
          header="Today"
          date="Sunday, Jan 8, 2023"
          className="date-header"
        />
        <div className="action-items">
          <SearchBar />
          <ActionBtn
            icon={<AiOutlinePlus size={20} onClick={() => saveLocation()} />}
          />
          <ActionBtn icon={<FaBell size={20} />} />
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Header;
