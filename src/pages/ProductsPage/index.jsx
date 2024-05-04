import "./style.scss";
import React,{ useEffect,useState } from "react";
import { Helmet } from "react-helmet";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ProductCard } from "../../components/ProductCard";

import { products,handleClick } from "../../data/products";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const [cart, setCart] = useState([]);

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="products-p">


      <Nav />
      <section className="products-s">
        <h2>Category name</h2>
        <div className="container">
          {products.slice(0, 13 ).map((item) => {
            return <ProductCard  key={item.id} item={item}  handleClick={handleClick} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
