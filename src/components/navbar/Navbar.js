import React, { useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import phone from "../../assets/phone.png";

import "./navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery, "with option:", selectedOption);
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <a href="">
          <img src={logo} alt="" />{" "}
        </a>
        <a href="">Propharm</a>
          </div>
      <div className="navbar_input">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="navbar_inputDropdown"
        >
          <option value="option1">Category</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="navbar_inputSarchimage">
          <img src={search} onClick={handleSearch} />
        </div>
      </div>
      <div className="navbar_contact">
        <a href="">
          <img src={phone} />
        </a>
        <div className="navbar_contactContent">
          <p>Sales & service support</p>
          <span>986-456-6782</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
