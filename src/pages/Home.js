import React from 'react'
import Navbar from '../components/Navbar'
import gucci from '../assets/images/gucci.png'
import hermes from '../assets/images/hermes.png'
import zara from '../assets/images/zara.png'
import adidas from '../assets/images/adidas.png'
import Product from './Product'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
         <h3 className='text-black md:text-8xl md:ml-16 md:pt-16 text-3xl ml-8 mt-16 font-sans'>DISCOVER UNIQUE & <br /> AUTHENTIC WEARS</h3>
         <button className='bg-black text-white md:ml-16 md:mt-10 ml-8 mt-16 w-[160px] h-[60px]'>Discover Now</button>
      </main>

      <section className='companies flex gap-8 mt-5 justify-center'>
         <img src={hermes} alt='' />
         <img src={zara} alt='' />
         <img src={adidas} alt='' />
         <img src={gucci} alt='' />
      </section>

      <Product />

      <Footer />
    </div>
  )
}

export default Home