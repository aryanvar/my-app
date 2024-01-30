import React,{useState} from 'react'
import cart from '../../assets/cart.png'
import like from '../../assets/like.png'
import compare from '../../assets/compare.png'
import './mainNva.css'

const MainNav = () => {

  const [activeLink, setActiveLink] = useState();
   const [hoveredLink, setHoveredLink] = useState(null);


  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText); 
  };

  const handleLinkHover = (event) => {
    setHoveredLink(event.target.innerText);
  };


  return (
    <div className='mainNav'>
          <div className="mainNav_left">
              <button>All Categories</button>
          </div>
          <div className="mainNav-center">
  <a href=""
           className={activeLink === 'Home' ? 'active' : hoveredLink === 'Home' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Home</a>
        <a href=""
           className={activeLink === 'Shop by brand' ? 'active' : hoveredLink === 'Shop by brand' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Shop by brand</a>
        <a href=""
           className={activeLink === 'Shop by Categories' ? 'active' : hoveredLink === 'Shop by Categories' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Shop by Categories</a>
        <a href=""
           className={activeLink === 'Blog' ? 'active' : hoveredLink === 'Blog' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Blog</a>
        <a href=""
           className={activeLink === 'Shop' ? 'active' : hoveredLink === 'Shop' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Shop</a>
        <a href=""
           className={activeLink === 'Elements' ? 'active' : hoveredLink === 'Elements' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Elements</a>
        <a href=""
           className={activeLink === 'Features' ? 'active' : hoveredLink === 'Features' ? 'hovered' : ''}
           onClick={handleLinkClick}
           onMouseEnter={handleLinkHover}>Features</a>
      </div>
          <div className="mainNav-right">
              <img src={compare} />
              <img src={like} />
              <img src={cart} />
          </div>
    </div>
  )
}

export default MainNav
