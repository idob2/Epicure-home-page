import React from "react";
import { useState } from "react";
import "./NavBar.scss";
import HamburgIcon from "../../assets/nav_bar_images/HAMBUR.svg";
import AboutLogo from "../../assets/nav_bar_images/about-logo@3x 1.svg"
import SearchIcon from "../../assets/nav_bar_images/Group.svg";
import BagIcon from "../../assets/nav_bar_images/Property 1=Bag.svg";
import GeneralIcon from "../../assets/nav_bar_images/General.svg";

const NavBar = (props: any) => {
  return (
    <nav className="main-navigation">
        <div className="hambur-logo-div">
        <button className="hamburg-button" onClick={props.handleMenuClick}>
            <img className="hamburg-img" src={HamburgIcon} alt="Hamburg" />
        </button>
        </div>
        <div className="about-logo-div">
        <img  className="about-logo" src={AboutLogo} alt="AboutLogo"/>
        <a className="restaurants-nav-bar" href="">Restaurants</a>
        <a className="chefs-nav-bar" href="">Chefs</a>
        </div>
        
        <div className="order-bag-div">
        <button className="search-button" onClick={props.handleSearchClick}>
            <img className="search-img" src={SearchIcon} alt="Hamburg" />
        </button>
        <button className="person-button">
            <img className="person-img" src={GeneralIcon} alt="Hamburg" />
        </button>
        <button className="bag-button" onClick={props.handleBagClick}>
            <img className="bag-img" src={BagIcon} alt="Hamburg" />
        </button>
        </div>
    </nav>
    

  );
};

export default NavBar;