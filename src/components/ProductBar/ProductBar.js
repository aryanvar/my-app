import React from 'react'
import beauty from '../../assets/beauty.png'
import grocery from '../../assets/grocery.png'
import baby from '../../assets/baby.png'
import herbs from '../../assets/harbs.png'
import healthTopics from '../../assets/healthTopic.png'
import medecines from '../../assets/medecines.png'
import './productBar.css'

const ProductBar = () => {
  return (
    <div class="main_productBar">
      <div class="product">
        <img src={baby} alt="Baby" />
        <a href="">Baby</a>
      </div>

      <div class="product">
        <img src={beauty} alt="Beauty" />
        <a href="">Beauty</a>
      </div>

      <div class="product">
        <img src={grocery} alt="Grocery" />
        <a href="">Grocery</a>
      </div>

      <div class="product">
        <img src={healthTopics} alt="Health Topics" />
        <a href="">Health Topics</a>
      </div>

      <div class="product">
        <img src={herbs} alt="Herbs" />
        <a href="">Herbs</a>
      </div>

      <div class="product">
        <img src={medecines} alt="Medicines" />
        <a href="">Medicines</a>
      </div>
    </div>
  );
}

export default ProductBar
