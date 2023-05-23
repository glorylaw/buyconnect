import React from 'react'
import Announcement from '../../components/announcements/Announcement'
import Categories from '../../components/categories/Categories'
import Footers from '../../components/footers/Footers'

import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'


const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footers />
    </div>
  )
}

export default Home