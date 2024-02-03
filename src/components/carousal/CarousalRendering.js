import React,{useState} from 'react'
import Caraousal from './Caraousal'
import './caraousal.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.jpg'

const CarousalRendering = () => {
    const images = [image1, image2, image3]

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
      console.log(
        "Searching for:",
        searchQuery,
        "with option:",
        selectedOption
      );
    };
  return (
    <div className='carousal_rendering'>
      <div>
        <Caraousal images={images} />
      </div>
      <div className="productBar">
        <div className="productBar_left">
          <h2>Select a product</h2>
        </div>
        <div className="productBar_centre">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="productBar_CenterDropdown1"
          >
            <option value="option1">Category</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="productBar_CenterDropdown2"
          >
            <option value="option1">Brand</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="productBar_inputBar">
            <h4>OR</h4>
            <input
              type="text"
              placeholder="Enter SKU"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="productBar_rightShop">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarousalRendering
