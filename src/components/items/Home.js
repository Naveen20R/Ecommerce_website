import React from 'react'

import Mens from './Mens'
// import Womens from './Womens'
import Kids from './Kids'
import KitchenItems from './KitchenItems'
import Beauty from './Beauty'
import Footer from '../footer/Footer'
import ProductList from './ProductList'
import Carousel from '../carousel/Carousel'
function Home() {
    return (
        <div>
            <ProductList />
            <Carousel />
            <Mens />
            <Kids />
            <KitchenItems />
            <Beauty />
            <Footer />

        </div>
    )
}

export default Home
