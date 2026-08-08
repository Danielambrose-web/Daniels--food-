import React from 'react'
import './Navbar.css'
import Image from './logo.png'
import Button from "../Button/Button";

function handleAdd() {
    alert("Item added!");
}


const Navbar = () => {
  return (
    <>
    < div className='Navbar'>
      <img src={Image} className="png" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div className="nav-button">
        <Button 
        label='Order Now'
        variant='secondary'
        onClick={() => alert(handleAdd())}
        />
      </div>
    </div>
    </>
  )
}

export default Navbar
