import React, { useState, useRef } from 'react'
import './Store.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFilter } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Product from '../Components/Product/Product'
import { Products } from '../dummyData'
import { useNavigate } from "react-router-dom"


function Store() {
    const navigate = useNavigate();
    const price1 = useRef();
    const price2 = useRef();
    const loafers = useRef();
    const sneakers = useRef();

    const [Pprice, setprice] = useState({ low: 0, high: 5000 })
    const [type, settype] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('called');
        if (price1.current.checked && price2.current.checked) {
            setprice({ low: 0, high: 5000 })
        }

        else if (price1.current.checked) {
            console.log('true');
            setprice({ low: '0', high: '1501' })
        }
        else if (price2.current.checked) {
            setprice({ low: '1501', high: '4501' })
        }
        else
        setprice({ low: 0, high: 5000 })
        console.log(Pprice)


        checktypes();

    }

    const checktypes = () => {
        if (loafers.current.checked && sneakers.current.checked) {
            settype('')
        }

        else if (loafers.current.checked) {
            settype('loafers')
        }
        else if (sneakers.current.checked) {
            settype('sneakers')
        }
        else settype('')

    }

    console.log(Products);
    console.log(Pprice)
    const x = Products.filter(p => {
        return p.type == { type };
    });
    console.log(x);
    return (
        <div className='Store'>
            <div className="filters-section">
                <form onSubmit={handleSubmit} >
                    <div className="f-heading">
                        <p className='filter-headings'>FILTERS</p>
                        <FontAwesomeIcon icon={faFilter} id='f-icon' />
                    </div>
                    <div className="f-cost">
                        <p className='filter-headings'>COST</p>
                        <div className="check">
                            <input type="checkbox" name="Price" id="" value='1501'

                                ref={price1} /> <span>RS 1000-1500</span>
                        </div>

                        <div className="check">
                            <input type="checkbox" name="Price" id="" value='4001'

                                ref={price2} /> <span>RS 1500-4000</span>
                        </div>




                    </div>
                    <div className="f-color">
                        <p className='filter-headings'>COLOUR</p>
                        <div className="colors">
                            <div className="box1"></div>
                            <div className="box2"></div>
                            <div className="box3"></div>
                            <div className="box4"></div>
                        </div>
                    </div>
                    <div className="f-type">
                        <p className='filter-headings'>TYPE</p>
                        <div className="type-check">
                            <input type="checkbox" name="xx" id=""
                                ref={loafers} /> <span>LOAFERS</span>
                        </div>
                        <div className="type-check">
                            <input type="checkbox" name="xx" id=""
                                ref={sneakers} /> <span>SNEAKERS</span>
                        </div>
                    </div>
                    <button type='submit' className='apply-btn' >Apply</button>
                </form>
            </div>{
                console.log(type)
            }
            <div className="shoes-sec">
                <div className="shoes-heading filter-headings">SHOES
                    <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon' />
                    <button id='sort-by'>Sort By</button>
                </div>

                <div className='productDisplay-sec'>
                    {

                        Pprice ?
                            Products.filter(p => {
                                return (p.price > Pprice.low && p.price < Pprice.high) && (type ? p.type == type : p.type == 'loafers' || 'sneakers');
                            }).map((shoe) => (
                                <Product shoe={shoe} />
                            ))
                            :
                            Products.map((shoe) => (
                                <Product shoe={shoe} />
                            ))

                    }


                    {/* <Product/>
                    <Product/>
                    <Product/>
                    <Product/> */}
                </div>
            </div>
            <div className="cart-sec">
                <div className="cart-h">
                    <span>CART</span>
                    <FontAwesomeIcon icon={faBagShopping} id='cart-icon' />
                </div>
                <div className='txt'>What's stopping you, designer?</div>
                <div className="home">
                    <span className='cart-txt'>
                    <FontAwesomeIcon icon={faLocationDot} className='ico'/>Home
                    </span>
                    <span className='cart-txt'>
                    <FontAwesomeIcon icon={faCalendar} className='ico'/> Date
                    </span>
                </div>
                <button id='order-now' >Order Now</button>                
            </div>
        </div>
    )
}

export default Store