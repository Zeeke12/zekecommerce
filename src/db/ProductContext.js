import { createContext } from 'react'
import { useState } from 'react';
import { products } from './products';
import { useEffect } from 'react';

export const ProductContext = createContext();



export const ProductContextProvider = (props) => {
  
    
      const [filteredList, setFilteredList] = useState(products);
    
      const filterBySearchAdidas = () =>{
        const query = "Adidas"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.company.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchPuma = () =>{
        const query = "Puma"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.company.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchNike = () =>{
        const query = "Nike"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.company.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchVans = () =>{
        const query = "Vans"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.company.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
    
      const filterBySearchAll = () => {
        setFilteredList(products)
      }

      const filterBySearchRed = () =>{
        const query = "red"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.color.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }

      const filterBySearchGreen = () =>{
        const query = "green"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.color.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }

      const filterBySearchWhite = () =>{
        const query = "white"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.color.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }

      const filterBySearchBlack = () =>{
        const query = "black"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.color.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchSneakers= () =>{
        const query = "sneakers"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.category.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchHeels= () =>{
        const query = "heels"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.category.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchFlats= () =>{
        const query = "flats"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.category.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const filterBySearchSandals= () =>{
        const query = "sandals"
        
        var updatedList = [...products]
    
        updatedList = updatedList.filter((product) => {
          return product.category.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
        )
        
    
      setFilteredList(updatedList);
      }
      const [result, setResult] = useState([])
      const [searchInput, setSearchInput] = useState('')
      
      const filterBySearch = () =>{
        const trimmed = searchInput.trim();
        
        if (trimmed === "") {
          alert("Please enter a valid search")
          setResult('hhh')
        }
        const resultt = products.filter(product => product.title.toLowerCase().includes(trimmed.toLowerCase())
        );
    
      setResult(resultt);
      localStorage.setItem('result', JSON.stringify(resultt));

      }





      const [cart, setCart] = useState([]);
      
      const addToCart = ( products ) => {
        const productIndex = cart.findIndex((item) => item.id === products.id);
        
        if (productIndex === -1) {
          // If the product is not in the cart, add it with a quantity of 1
          const updatedCart = [...cart, { ...products, quantity: 1 }]
          setCart(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));

    } else {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));

    }
    console.log(productIndex)
  };

  const removeFromCart = (productsId) => {
    const updatedCart = cart.filter((product) => product.id !== productsId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

  };
  const clearCart = () => {
    const updatedCart = []
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  const decreaseQuantity = (productsId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productsId && item.quantity > 1) {
        item.quantity -= 1;
      } 
      return item;
    });
    setCart(updatedCart);
  };
  const increaseQuantity = (productsId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productsId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedCart);
  };
  const updateCart = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };


  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.newPrice; // Assuming each item has a 'price' property
    });
    return total;
  };



  console.log(cart)
  useEffect(() => {
    // Retrieve cart data from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem('result'));
    if (storedResult) {
      setResult(storedResult);
    }
  }, []);


     
      const contextValue = {
        products, filteredList, filterBySearchAdidas, filterBySearchAll, filterBySearchVans, filterBySearchPuma, filterBySearchNike, filterBySearch, cart, addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity, calculateTotal, result, updateCart, filterBySearchRed, filterBySearchWhite, filterBySearchGreen, filterBySearchBlack, filterBySearchSandals, filterBySearchSneakers, filterBySearchHeels, filterBySearchFlats, searchInput, setSearchInput
      }

      return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
      )
}

