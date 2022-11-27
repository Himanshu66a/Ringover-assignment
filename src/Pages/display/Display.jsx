import React, { useState, useEffect } from 'react'
import './display.css'
import '../Store.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faStar, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import { Products } from '../../dummyData'



function Display() {
  const [flag, setflag] = useState(false)
  const [getProduct, setProduct] = useState([])
  const id = useParams().id;



  useEffect(() => {

    const filtered = Products.filter(p => {
      return p.id == id;
    })
    setProduct(filtered[0])
    console.log(filtered);
  }, [])

  const shoe = getProduct[0];
  console.log(shoe);

  return (
    <div className='display'>
      <div className='desc-section'>
        <p>Ypur design space</p>
        <div className="desc-child">
          <div className="full-img">
            <div className="img-holder">
              <img src={getProduct.Picture} alt="" />
            </div>
          </div>
          <div className="pro-details">
            <div className="small-images">
              <img src={getProduct.Picture} alt="" className="small-img" />
              <img src={getProduct.Picture} alt="" className="small-img" />
              <img src={getProduct.Picture} alt="" className="small-img" />
            </div>
            <div className="details">
              <div className="name">
                {getProduct.desc}
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} className='faastar' />
                <FontAwesomeIcon icon={faStar} className='faastar' />
                <FontAwesomeIcon icon={faStar} className='faastar' />
                <FontAwesomeIcon icon={faStar} className='faastar' />
              </div>
              <div className="price">
                RS. {getProduct.price}/-
              </div>
              <div className="desc">
                Get you pair at 50% discount.
              </div>
              <div className="front">
                <span className='sides'>Front</span>
                <span className="boxes">
                </span>
                <span className="boxes">
                </span>
                <span className="boxes">
                </span>
              </div>
              <div className="middle">
                <div className="front">
                  <span className='sides'>Middle</span>

                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                </div>
              </div>
              <div className="back">
                <div className="front">
                  <span className='sides'>Back</span>

                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                </div>
              </div>
              <div className="sole">
                <div className="front">
                  <span className='sides'>Sole</span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                </div>
              </div>
              <div className="size">
                <div className="front">
                  <span className='sides'>Size</span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                  <span className="boxes">
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
        <button id='share'>Share</button>
        <button onClick={() => setflag(true)} id='add-cart'>Add to cart</button>
      </div>
      
      <div className="cart-sec">
        <div className="cart-h">
          <span>CART</span>
          <FontAwesomeIcon icon={faBagShopping} id='cart-icon' />
        </div>
        {
          flag ? <div className="cart-item">
            <img src={getProduct.Picture} alt="" className='cart-img' />
            <div className="info">
              <div className="info-name">{getProduct.desc}</div>
              <div className="imfo-price">Rs. {getProduct.price}/-</div>
              <FontAwesomeIcon icon={faCircleXmark} id='cross-icon'
                onClick={() => setflag(false)} />
            </div>
          </div> : <div className='txt'>What's stopping you, designer?</div>
        }
        <div className="home">
          <span className='cart-txt'>
            <FontAwesomeIcon icon={faLocationDot} className='ico' />Home
          </span>
          <span className='cart-txt'>
            <FontAwesomeIcon icon={faCalendar} className='ico' /> Date
          </span>
        </div>
        <button id='order-now' >Order Now</button>
      </div>



    </div>
  )
}

export default Display