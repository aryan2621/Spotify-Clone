import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";




function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  const User_Image= user?.images[0]?.url ? user?.images[0]?.url : "https://static.thenounproject.com/png/17241-200.png";
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
      <Avatar className="header__Avatar"  alt={user?.display_name}
                    src={User_Image} />
                    <h3 className="header__Username__Title">
                    {user?.display_name}
                    </h3>
      </div>
    </div>
  );
}

export default Header;