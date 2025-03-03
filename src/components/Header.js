import React from "react";
import "./Header.css"
import ThemeButton from "./ThemeButton.js";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <span className="header-title"><span>S</span>tudent <span>P</span>rogress <span>T</span>racker</span>
        </div>

        <div className="header-right">
          <ThemeButton 
            theme={this.props.theme}
            changeTheme={this.props.changeTheme}
          />
          {/* <button className="help-button">Help</button> */}
        </div>
      </div>
    );
  }
};

export default Header;
