import React, { useState } from 'react';
import MainProducts from '../components/product/MainProducts';
import MainHeader from '../components/Header/NavBar/Mainheader';

const producto = () => {
  return (
    <>
       <MainHeader />
       <MainProducts />
    </>
  )
}

export default producto;