import React from "react";
import "./index.scss";
import { IconVersions } from "@tabler/icons-react";

const Header = ({ CurrentView = 3, title = "Album", Align = "center", isIcon = true }) => {
  return (
    <div className="main_header_container" style={{ width: CurrentView === 3 ? "100%" : "75%" }}>
      <div className="main_header" style={{ justifyContent: Align || "center" }}>
        <h1>
          {isIcon && Align !== "center" && <IconVersions />} {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
