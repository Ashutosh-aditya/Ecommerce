import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  // console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
}

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
      {/* <div className="container">
        <button onClick={()=>{addCart()}}>Add</button>
        <button onClick={()=>{deleteCart()}}>Del</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className='flex justify-center -mt-10 mb-4'>
        <Link to={'/allproducts'}>
        <button className='bg-gery-300 px-5 -y-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home