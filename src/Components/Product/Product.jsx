import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
function Product({shoe}) {
    const navigate = useNavigate();
    return (
        <div className='product' onClick={()=> navigate(`/display/${shoe.id}`)}>
            <div className="product-img">
                <img src={shoe.Picture} alt="" />
            </div>
            <div className="product-title">
               {shoe.desc}
            </div>
            <div className="price">
              RS. {shoe.price}/- 
              <span>
              <FontAwesomeIcon icon={faStar} id='star-icon' />
              <FontAwesomeIcon icon={faStar} id='star-icon' />
              <FontAwesomeIcon icon={faStar} id='star-icon' />
              <FontAwesomeIcon icon={faStar} id='star-icon' />
                </span>        
              

            </div>

        </div>
    )
}

export default Product