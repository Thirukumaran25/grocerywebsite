import React, { useState, useEffect, useContext } from 'react';
import { cartContext } from '../App';
import snackimg1 from "../images/snack cate 1.png"
import snackimg2 from "../images/snack cate 2.png"
import snackimg3 from "../images/snack cate 3.png"
import snackimg4 from "../images/snack cate 4.png"
import snackimg5 from "../images/snack cate 5.png"
import snackimg6 from "../images/snack cate 6.png"
import snackimg7 from "../images/snack cate 7.png"
import snackimg8 from "../images/snack cate 8.png"
import {Link} from 'react-router-dom'
import './Bakery.css'


const productsData = [
  { id: 49, imgSrc: snackimg1, title: 'Organic Beetroot', price: 80 },
  { id: 50, imgSrc: snackimg2, title: 'Organic Carrots', price: 100 },
  { id: 51, imgSrc: snackimg3, title: 'Organic Garlic', price: 150 },
  { id: 52, imgSrc: snackimg4, title: 'Organic Sweetcorn', price: 30 },
  { id: 53, imgSrc: snackimg5, title: 'Organic Spinach', price: 60 },
  { id: 54, imgSrc: snackimg6, title: 'Organic Tomatoes', price: 200 },
  { id: 55, imgSrc: snackimg7, title: 'Organic Beans', price: 90 },
  { id: 56, imgSrc: snackimg8, title: 'Organic Cabbage', price: 50 },
];

function Snacks() {
  const {cart,setCart}=useContext(cartContext)
      const [maxPrice, setMaxPrice] = useState(200);
      const [sortBy, setSortBy] = useState('name');
      const [sortOrder, setSortOrder] = useState('asc');
      const [filteredProducts, setFilteredProducts] = useState(productsData);
    
      const addcart = (product) => {
        setCart([...cart, product]); // Add the specific product to the cart
        alert("Added to cart");
      };
      const removecart=(product)=>{
      setCart(cart.filter((c)=>c.id !==product.id))
    }
  
    
      useEffect(() => {
        let filtered = productsData.filter((product) => product.price <= maxPrice);
    
        filtered.sort((a, b) => {
          if (sortBy === 'name') {
            return sortOrder === 'asc'
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortBy === 'price') {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
          }
          return 0;
        });
    
        setFilteredProducts(filtered);
      }, [maxPrice, sortBy, sortOrder]);
    
      return (
        <div className="bg-light min-vh-100 py-5">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="row mb-4">
              {/* Filter Section */}
              <aside className="col-md-3 mb-4 py-5">
                <h2 className="fs-4 fw-bold mb-3" style={{ color: '#111827' }}>Filter</h2>
                <label htmlFor="priceRange" className="form-label fw-bold text-secondary">
                  Sort by Price: ₹{maxPrice}
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="priceRange"
                  min="0"
                  max="300"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </aside>
    
              {/* Sort Section */}
              <section className="col-md-9 px-5">
                <h2 className="fs-4 fw-bold" style={{ color: '#4EB528', textDecoration: "underline" }}>Snacks & Bevarage</h2>
                <div className="d-flex flex-column flex-md-row justify-content-end mb-4">
                  <div className="d-flex gap-3 align-items-center">
                    <label htmlFor="sortBy" className="form-label fw-bold text-secondary mb-0">Sort By:</label>
                    <div>
                      <select
                        id="sortBy"
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        aria-label="Sort products by"
                        style={{ color: 'black', border: "none", backgroundColor: "transparent", fontWeight: "bold" }}
                      >
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                      </select>
                    </div>
                  </div>
                </div>
    
                {/* Product Cards */}
                <div className="row g-4">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center text-muted col-12 fs-5">
                      No products found.
                    </div>
                  ) : (
                    filteredProducts.map((product) => (
                            <article key={product.id} className="col-12 col-sm-6 col-md-4">
                              <div className="card h-100 shadow-sm rounded-3"> 
                                <Link className='productlink' to="/Snackdescrip">
                                <img
                                  src={product.imgSrc}
                                  alt={product.title}
                                  className="card-img-top rounded-top"
                                  style={{ height: '10rem', objectFit: 'cover', padding: ".5rem" }}
                                />
                                </Link> 
                                <div className="card-body d-flex flex-column" style={{ textAlign: "center", alignItems: "center", paddingTop: "0" }}>
                                  <Link className='productlink' to="/Snackdescrip">
                                  <h3 className="card-title fs-5 fw-bold text-dark">{product.title}</h3>
                                  <p className="fs-4 fw-bold mb-3" style={{ color: '#111827' }}>₹ {product.price}</p>
                                  <div className="d-flex mb-3 text-warning" aria-label="Product rating">
                                    {[...Array(5)].map((_, idx) => (
                                      <i key={idx} className="fa-solid fa-star" style={{ color: "#c7e147", padding: "5px" }}></i>
                                    ))}
                                  </div>
                                 </Link> 
                                  {cart.includes(product) ? <button className="btn btn-danger mt-auto fw-semibold" type="button" onClick={() => removecart(product)}>
                                  Remove from cart
                                </button> : <button className="btn btn-success mt-auto fw-semibold" type="button" onClick={() => addcart(product)}>
                                  Add to cart
                                </button>}
                                </div>
                              </div>
                            </article>
                    ))
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    }

export default Snacks
