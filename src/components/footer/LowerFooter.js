import React from 'react'
import payments from '../../assets/payments.png'
import './lowerFooter.css'
const lowerFooter = () => {
  return (
    <div className="lowerFooter">
      <div className="lowerFooterLeft">
        <p>Copyright 2020 Propharm. All Rights Reserved</p>
      </div>
      <div className="lowerFooterRIght">
        <img src={payments} alt="" />
      </div>
    </div>
  );
}

export default lowerFooter
