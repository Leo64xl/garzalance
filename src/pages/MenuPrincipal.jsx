import React from 'react'
import appFirebase from '../credenciales';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import TrustedBy from '../components/trustedBy/TrustedBy';
import Slide from '../components/Slider/Slide';
import {cards} from '../data';
import CatCard from '../components/catCard/CatCard';

const MenuPrincipal = () => {
  return (
    <div className='menuPrincipal'>
      <Navbar />
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item"></div>
          <div className="item">
            <video> src="../assets/images/video.mp4" controls </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPrincipal