import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';

import { storeProducts } from './actions/productAction'

function App(props) {

  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then((response)=>{
        return response.json()
    })
    .then((res)=>{
        props.storeProducts(res)
    })
  
  },[])

  return (
    <div id="app" className={`App ${props.isCartOpen ? 'cart-open': ''}`}>

      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products/>} >
            <Route path=':category' element={<Products/>}/>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

const mapStateToProps = (state) =>{
  return({
    isCartOpen: state.cartReducer.isCartOpen
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    storeProducts: (data)=>dispatch(storeProducts(data))
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
