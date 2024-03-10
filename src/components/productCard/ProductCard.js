import React from "react";
import "./productCard.css";
import productImage1 from "../../assets/background1Image.png";
import productImage2 from "../../assets/background2Image.png";
import productImage3 from "../../assets/backgroung3Image.png";
import productImage4 from "../../assets/productCArd4Image.png"
const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="productCard1">
        <div className="productCard1Image">
          <img src={productImage1} alt="" />
        </div>
        <div className="productCardInfo">
          <h3>Get it now for 45% OFF</h3>
          <p>
            <b>Pyridoxine</b>Vitamin B6
          </p>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="productCard2">
        <div className="productCardInfo2">
          <h3>Get it now for 45% OFF</h3>
          <p>
            <b>Pyridoxine</b>Vitamin B6
          </p>
        </div>
        <div className="productCard2Image">
          <img src={productImage2} alt="" />
        </div>
      </div>
      <div className="productCard3">
        <div className="productCardInfo3">
          <h3>Get it now for 45% OFF</h3>
          <p>
            <b>Pyridoxine</b>Vitamin B6
          </p>
          <button>Buy Now</button>
        </div>
        <div className="productCard3Image">
          <img src={productImage3} alt="" />
        </div>
      </div>
      <div className="productCard4">
        <div className="productCard4Info">
          <h3>Get it now for 45% OFF</h3>
          <p>
            <b>Pyridoxine</b>Vitamin B6
          </p>
          <button>Buy Now</button>
              </div>
              <div className="productCard4Image">
                  <img src={productImage4} alt="" />
              </div>
      </div>
    </div>
  );
};

export default ProductCard;
