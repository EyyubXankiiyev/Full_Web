import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const navigate = useNavigate()

  const itemClicked = async() => {
    
    navigate(`/product/${props.item.id}`)
    window.scrollTo(0, 0);

  }
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={props.item.img[0]} />
      <div className="description">
        <p>
          <b>{props.item.name}</b>
          <p>{props.item.desc}</p>
        </p>
        <p> Price: ${props.item.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};