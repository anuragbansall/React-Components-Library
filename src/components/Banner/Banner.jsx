import React from 'react'
import './Banner.css'
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

function Banner({variant="neutral", width="100%", children}) {

    let icon
    if(variant === "success"){
        icon = <FaCheckCircle className='icon' />
    }else if(variant === "warning"){
        icon = <IoWarning className='icon' />
    }else if(variant === "error"){
        icon = <IoCloseCircle className='icon' />
    }else{
        icon = <FaInfoCircle className='icon' />
    }

    const bannerStyles = {
        width: width,
    }

  return children ? (
    <div className={`banner-component ${variant}`} style={bannerStyles}>
        {icon}
        <div className='content'>
            {children}
        </div>
    </div>
  ) : null
}

export default Banner


// How to use :

/*
    import Banner from './components/Banner'

    // Multi line
    
    <Banner variant="success" width='80vw'>
        <Banner.Title>Congratulation!</Banner.Title>
        <Banner.Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Message>
    </Banner>

    <Banner variant="warning" width='80vw'>
        <Banner.Title>Attention</Banner.Title>
        <Banner.Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Message>
    </Banner>

    <Banner variant="error" width='80vw'>
        <Banner.Title>There is a problem with your application</Banner.Title>
        <Banner.Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Message>
    </Banner>

    <Banner variant="neutral" width='80vw'>
        <Banner.Title>Update available</Banner.Title>
        <Banner.Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Message>
    </Banner>

    // Single line

    <Banner variant="success" width='80vw'>
        <Banner.Title>Congratulation!</Banner.Title>
    </Banner>
    
    <Banner variant="warning" width='80vw'>
        <Banner.Title>Attention</Banner.Title>
    </Banner>

    <Banner variant="error" width='80vw'>
        <Banner.Title>There is a problem with your application</Banner.Title>
    </Banner>
    
    <Banner variant="neutral" width='80vw'>
        <Banner.Title>Update available</Banner.Title>
    </Banner>
*/