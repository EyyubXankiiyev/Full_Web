import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

export const ProductCard = (props) => {
  
  const navigate = useNavigate()

  const itemClicked = async() => {
    //props.setClicked?.(!props.clicked);
    //const x = await localStorage.setItem("selectedItem", props.item.id);
    navigate(`/product/${props.item.id}`)
    window.scrollTo(0, 0);

  }
  return (
    <div className="product-card" onClick={itemClicked}>
      <div className="img-box">
        <img src={props.item.img[0]} alt="Product" />
        <img className="deactive" src={props.item.img[1]} alt="Product" />
      </div>
      <div className="desc">
        <div className="txt">
          <h3>{props.item.name}</h3>
          <p>{props.item.desc}</p>
        </div>
        <span>${props.item.price}</span>
      </div>
    </div>
  );
}
