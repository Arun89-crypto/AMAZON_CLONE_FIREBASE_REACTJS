import React from 'react'
import './Home.css';
import Product from './Product';
import Data from './products.json';

function Home() {
    console.log(Data);
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" alt=""></img>
            {/* Product */}
            <div className="products__section">
                {Data.map((data) => {
                    const { id, title, image, rating, price } = data;
                    return (
                        <div className="home__row" key={id}>
                            <Product id={id} title={title} image={image} rating={rating} price={price} key={id + 1000} />
                        </div>
                    );
                })}
            </div>
            {/* Product id,title,image,rating,price  */}
        </div>
    )
}

export default Home;