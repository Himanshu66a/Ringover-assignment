import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"

function Header() {
    const path =   window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className="head-left">
                <div className="img-container">
                    <img src="/assets/websitelogo.png" alt="" />

                </div>
            </div>
            <div className="head-middle">
                <div onClick={()=>navigate('/home')}>HOME
                    {
                        (path == '/home') &&<div className="underline">
                        </div>
                    }
                    
                </div>
                <div onClick={()=> navigate('/journey')} >JOURNEY{
                        (path == '/journey') &&<div className="underline">
                        </div>
                    }</div>
                <div onClick={()=> navigate('/team')}>TEAM{
                        (path == '/team') &&<div className="underline">
                        </div>
                    }</div>
                <div onClick={()=> navigate('/store')}>STORE{
                        (path == '/store') &&<div className="underline">
                        </div>
                    }</div>
                <div onClick={()=> navigate('/contactUs')}>CONTACT{
                        (path == '/contactUs') &&<div className="underline">
                        </div>
                    }</div>
            </div>
            <div className="head-right">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} id='us' />
                    <span>Himanshu</span>
                </div>

            </div>
        </div>
    )
}

export default Header