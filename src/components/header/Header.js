import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import CurrencyDropdown from "./CurrencyDropdown";
import user from "../../assets/user.png"
import './header.css'

const Header = () => {
    
  return (
      <div className="header">
        <div className="header-right">
          <p>
            Due to the COVID 19 epidemic, orders may be processed with a slight
            delay
          </p>
        </div>
            <div className="header-left">
          <LanguageDropdown />
          <CurrencyDropdown />
          <a href=""><img src={user} />My Account</a>
        </div>
      </div>
  );
};

export default Header;
