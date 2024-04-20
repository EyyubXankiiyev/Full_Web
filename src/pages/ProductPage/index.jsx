import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import { Helmet } from "react-helmet";
import "./style.scss";
import { ProductCard } from "../../components/ProductCard";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [item, setItem] = useState(false);
  const params = useParams();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const getData = async () => {
    const x = await products.find((x) => x.id == params.id);
    setItem(x);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [params]);



  return (
    <div className="product-p">

      <Nav />
      <div className="info-s">
        <div className="mini-image">
          <h1>image</h1>
          <div className="img-gallery-mini">
            {item?.img?.map((image, index) => {
              return <img key={index} src={`${image}`} alt="" className="mini"/>;
            })}
          </div>
          <h1>image</h1>
          <div className="img-gallery-mini">
            {item?.img?.map((image, index) => {
              return <img key={index} src={`${image}`} alt="" className="mini" />;
            })}
          </div>
          <h1>image</h1>
          <div className="img-gallery-mini">
            {item?.img?.map((image, index) => {
              return <img key={index} src={`${image}`} alt=""  className="mini"/>;
            })}
          </div>
        </div>
        <div className="img-gallery">
          {item?.img?.map((image, index) => {
            return <img key={index} src={`${image}`} alt="" />;
          })}
        </div>
        <div className="txt">
          <div className="box">

            <div className="title">
              <h1>Apollo</h1>
              <h2>Running Short</h2>
            </div>
            <div className="size">
              <h1>SIZE:</h1>
              <div className="butens">
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>

              </div>
            </div>
            <div className="color">
              <h1>COLOR:</h1>
              <div className="color-butons">
                <div className="grey"></div>
                <div className="black"></div>
                <div className="green"></div>

              </div>
            </div>
            <div className="price">
              <h1>PRICE:</h1>
              <h3>$50.00</h3>
            </div>
            <button className="add">ADD TO CART</button>
            <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;