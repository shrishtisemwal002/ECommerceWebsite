import React from 'react';
import CommonSection from '../../CommonSection';
import "./style.css";
import products from '../../../Utils/data/products';
import { useState } from 'react';
import ProductList from '../../ProductList';

const Shop = () => {
  const [productsData,setProductsData] = useState(products);

  const handleFilter = (e) =>{
    const filterValue = e.target.value;
    if(filterValue === 'sofa') {
      const filteredProducts = products.filter((item)=>item.category==="sofa");
      setProductsData(filteredProducts);
    }
    if(filterValue === 'chair') {
      const filteredProducts = products.filter((item)=>item.category==="chair");
      setProductsData(filteredProducts);
    }
    if(filterValue === 'mobile') {
      const filteredProducts = products.filter((item)=>item.category==="mobile");
      setProductsData(filteredProducts);
    }
    if(filterValue === 'watch') {
      const filteredProducts = products.filter((item)=>item.category==="watch");
      setProductsData(filteredProducts);
    }

    if(filterValue === 'wireless') {
      const filteredProducts = products.filter((item)=>item.category==="wireless");
      setProductsData(filteredProducts);
    }


    
  }

  return (
    <div>
      <CommonSection title="Products" />
      <section className="shopWidgets">
        <div>
          <select className='filterWidget' onChange={handleFilter}>
            <option>Filter By Category</option>
            <option value="sofa">Sofa</option>
            <option value="chair">Chair</option>
            <option value="mobile">Mobile</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>
      </section>
      <section>
        {productsData.length === 0 ? (
          <h1>No Product Found</h1>
        ) :
        <ProductList data={productsData} />
        }
      </section>
    </div>
  )
}

export default Shop;
