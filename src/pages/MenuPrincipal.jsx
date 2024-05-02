import React from 'react'
import appFirebase from '../credenciales';
import { Link, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import TrustedBy from '../components/trustedBy/TrustedBy';
import Slide from '../components/Slider/Slide';
import {cards} from '../data';
import CatCard from '../components/catCard/CatCard';
import "../Diseños_css/MenuPrincipal.scss"
import ProjectCard from '../components/ProjectCard/ProjectCard'
import {projects} from '../data';

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
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="../assets/images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, juts project-based pricing.
            </p>
            <div className="title">
              <img src="../assets/images/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
            Find the right freelancer to begin working on your project within
            minutes.
            </p>
            <div className="title">
              <img src="../assets/images/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
            Always know what you all pay upfront. Your payment isnt released
            until you approve the work.
            </p>
            <div className="title">
              <img src="../assets/images/check.png" alt="" />
              24/7 support
            </div>
            <p>
            Our support team is available around the clock anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video  src="../assets/images/video.mp4" controls ></video>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Graphics & Design</span>
          </div>
            <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
            />
            <div className="line"></div>

            <span>Digital Marketing</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Writing & Translation</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Video & Animation</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Music & Audio</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Programming & Tech</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Business</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Lifestyle</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Data</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Photography</span>
          </div>
          </div>
        </div>
      </div>
      <div className="features dark">
      <div className="container">
          <div className="item">
            <h1>
              GarzaLance <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore GarzaLance Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default MenuPrincipal