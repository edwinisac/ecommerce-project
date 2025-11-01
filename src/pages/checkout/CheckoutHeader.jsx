import {Link} from 'react-router-dom'
import './CheckoutHeader.css'
import logo from '../../assets/logo.png'
import mobileLogo from '../../assets/mobile-logo.png'

export function CheckoutHeader({cart}) {
  let totalQuantity=0;
  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
  })
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={logo} />
              <img className="mobile-logo" src={mobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {totalQuantity}
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}
