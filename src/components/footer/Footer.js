import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkdien from "../../assets/linkdien.png";
import youtube from "../../assets/youtube.png";

const Fotter = () => {
  return (
    <div className="footer">
      <div className="footer_part1">
        <div className="footer_part1Logo">
          <img src={logo} alt="" />
          <h2>Propharm</h2>
        </div>
        <div className="footer_part1Address">
          <p>
            70 Washington Square South,
            <br /> New York, NY 10012, United States
          </p>
          <a href="#">Show on map</a>
        </div>
        <div className="footer_part1Contact">
          <div className="footer_part1ContactFacebook">
            <img src={facebook} alt="" />
          </div>
          <div className="footer_part1ContactFacebook">
            <img src={instagram} alt="" />
          </div>
          <div className="footer_part1ContactFacebook">
            <img src={twitter} alt="" />
          </div>
          <div className="footer_part1ContactFacebook">
            <img src={linkdien} alt="" />
          </div>
          <div className="footer_part1ContactFacebook">
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <div className="footer_part2">
        <div className="footer__part2Info">
          <h4>Need help</h4>
          <h3>9876 788 - HGGGY -888</h3>
          <div className="footer__part2InfoTiming">
            <p>
              Monday - Friday: 9:00 - 20:00 <br />
              Saturday: 9:00 - 15:00
            </p>
            <a href="#">inbox@propharm.com</a>
          </div>
        </div>
      </div>
      <div className="footer_part3">
        <div className="footer_part3Information">
          <h3>Information</h3>
          <a href="">About-Us</a>
          <a href="">Delivery-Information</a>
          <a href="">Privacy-Policy</a>
          <a href="">Sales</a>
          <a href="">Terms & Condition</a>
        </div>
      </div>
      <div className="footer_part4">
        <div className="footer_part4Account">
          <h3>Account</h3>
          <a href="">Dashboard</a>
          <a href="">My-orders</a>
          <a href="">Account-Details</a>
          <a href="">Return</a>
          <a href="">Wishlist</a>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
