import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import Services from '../../Services';
import ProductList from '../../ProductList';
import products from "../../../Utils/data/products";
import img from "../../../Utils/images/hero-img.png";

const Home = () => {
    const [trendingData,setTrendingData] = useState([]);
    const [bestSalesData,setBestSalesData] = useState([]);


    const year = new Date().getFullYear();

    useEffect(() =>{
        const filteredTrendingProducts = products.filter((item) => item.category === "chair");

        const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");

        setTrendingData(filteredTrendingProducts);
        setBestSalesData(filteredBestSalesProducts);

    },[])

    return (
        <section >
            <div className="homeSection">
                <div className="leftHomeSection">
                    <p>Trendy Product in {year}</p>
                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Optio sunt quasi temporibus cum tempora, quo adipisci est fugiat animi cupiditate nam aliquid dolore enim beatae.
                    </p>
                    <button className='shopBtn'><Link to="/shop">SHOP NOW</Link></button>
                </div>

                <div>
                    <img src={img} alt ="homepage image"/>
                </div>  
            </div>


            <Services />
            <section>
                <h1 className="trendingProductHeading">Trending Products</h1>
                <ProductList data={trendingData} />
            </section>

            <section>
                <h1 className="trendingProductHeading">Best Sales</h1>
                <ProductList data={bestSalesData} />
            </section>

        </section>

    )
}

export default Home;
