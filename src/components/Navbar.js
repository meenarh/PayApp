import React from 'react'
import shop from '../assets/images/shopping-bag.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex gap-5 font-sans-serif bg-black text-white p-5">
         <img src={shop} alt='' />
         <p className='text-2xl'>PayApp</p>
         <ul className="flex flex-auto gap-3 text-lg justify-end">
            <li>Home</li>
            <li>Product</li>
         </ul>
      </nav>
    </div>
  )
}

export default Navbar