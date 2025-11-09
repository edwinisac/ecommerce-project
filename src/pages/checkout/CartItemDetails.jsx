import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function CartItemDetails({ cartItem, loadCart }) {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateQuantity = async () => {
    if (update) {
      try {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
          quantity: Number(quantity),
        });
        await loadCart();
        setUpdate(false);
      } catch (error) {
        console.error("error updating data to the server", error);
      }
    } else {
      setUpdate(true);
    }
  };


  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {update ? (
              <input
                type="text"
                className="textbox"
                value={quantity}
                onChange={changeQuantity}
                onKeyDown={(e)=>{
                  if(e.key==="Enter"){
                    updateQuantity();
                  }
                  else if(e.key==="Escape"){
                    setUpdate(false);
                  }
                }}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
