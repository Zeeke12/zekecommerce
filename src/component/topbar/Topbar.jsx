import React, { useState } from 'react';
import shoppinglogo from '../../assets/download (3).jpg'
import { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import { useNavigate } from 'react-router-dom'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaShoppingCart } from 'react-icons/fa'
 

const Topbar = () => {
  const { filterBySearch, cart, setSearchInput, searchInput } = useContext(ProductContext)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchAndNavigate = () => {
    setSearchInput('')
    filterBySearch();
    navigate('/result');
  }


  return (
    <header className="sticky-top w-full">
      <nav className="bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-700 mx-0 flex items-center justify-between p-6 lg:px-8 w-full " aria-label="Global">
        <div className="bg-transparent flex lg:flex flex-between">
          <a href="/" className="bg-transparent -m-1.5 p-1.5 text-3xl">
            Zeke
          </a>
        </div>
        <div className="flex lg:hidden bg-transparent">
          <button
            type="button"
            className="bg-transparent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 bg-transparent" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-transparent">
          
          <a href="/" className="bg-transparent pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="bg-transparent pl-2 pb-1 text-xl  leading-6 text-gray-900">
            About
          </a>
          <a href="/products" className="bg-transparent pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Products
          </a>
          
          
        </Popover.Group>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-transparent">
        <div className='flex flex-row gap-1 bg-green-800'>
        <input className=' border-1 border-[blue-400] px-2' type='text' value={searchInput}   placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)} />
                <button className='bg-transparent text-white px-2 py-1' onClick={searchAndNavigate}>Search</button>
              </div>
              <div className='bg-transparent'>
              <a href="/cart" className=" pl-2 pb-1 text-xl  leading-6 text-gray-900">
                <span class="material-symbols-outlined bg-transparent text-4xl">shopping_cart</span>
                  {cart.length === 0 ? <span> </span> : <span className='animate-bounce px-1 absolute inline-flex  opacity-75 bg-transparent'>{cart.length}</span>}
            
          </a>
              </div>
        </Popover.Group>
        
        
      </nav>
      <Dialog as="div" className="lg:hidden w-full" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 z-10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between w-5 bg-green-700">
          <a href="/" className="text-lg">
            Zeke
          </a>
          
          </div>
          <div className="mt-8 translate-x-[-25px] bg-transparent">
            <div className="border-2 border-green-500 ">
            <button
              type="button"
              className="translate-x-[350px] rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
              <div className="flex flex-col">
                
              <a href="/" className="bg-transparent border-1 pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="bg-transparent border-1 pl-2 pb-1 text-xl  leading-6 text-gray-900">
            About
          </a>
          <a href="/products" className="bg-transparent border-1 pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Products
          </a>
          <a href="/cart" className="bg-transparent border-1 pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Cart{cart.length === 0 ? <span> </span> : <span className='animate-bounce px-1 absolute inline-flex  opacity-75'>{cart.length}</span>}
          </a>
          
              </div>
              <div className='flex flex-col gap-2'>
              <input className=' border-1 border-[blue-400] px-2' type='text' value={searchInput}   placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)} />
              <a href="/cart" className="bg-transparent pl-2 pb-1 text-xl  leading-6 text-gray-900">
            Cart{cart.length === 0 ? <span> </span> : <span className='animate-bounce px-1 absolute inline-flex  opacity-75 bg-transparent'>{cart.length}</span>}
            <FaShoppingCart />
          </a>
                <button className='bg-green-800 w-screen text-white border-2 border-white px-2 py-1' onClick={searchAndNavigate}>Search</button>
                
              </div>
              
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}


export default Topbar