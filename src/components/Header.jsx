import { NavLink, useNavigate, useSearchParams} from 'react-router-dom'
import './Header.css';
import logowhite from '../assets/logo-white.png'
import mobileLogoWhite from '../assets/mobile-logo-white.png'
import { useState } from 'react';




export function Header({cart}) {

  const [searchParams]=useSearchParams();
  const search=searchParams.get('search');


  const [searchValue,setSearchValue]=useState(search || '');
  const navigate=useNavigate();
  const updateSearchValue=(e)=>{
   setSearchValue(e.target.value);

  }

  const handleSearch=()=>{
    navigate(`/?search=${searchValue}`);
  }

  let totalQuantity=0;
  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
  });
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={logowhite} />
            <img className="mobile-logo" src={mobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" onChange={updateSearchValue} />

          <button className="search-button"onClick={handleSearch}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
