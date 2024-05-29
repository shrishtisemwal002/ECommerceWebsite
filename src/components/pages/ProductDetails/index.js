import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import products from '../../../Utils/data/products';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { addToCart } from '../../../Store/Action/cart';
import CommonSection from '../../CommonSection';

const ProductDetails = () => {
    const[tab,setTab] = useState('desc');

    const {id} = useParams();
    const product = products.find((item)=> item.id === id);

    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product;

    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(addToCart(product.id));

        toast.success("Product added successfully");
    }

  return (
    <>
    <CommonSection title={`${productName}`}/>
    <section className = "productDetails">

        <div className="imageContainer">
            <img src={imgUrl} alt="product image" width="100%"/>
        </div>

        <div className="productDescription">

            <h1>{productName}</h1>

            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>

            <span>({avgRating} Rating)</span>

            <p className="productPrice">${price}</p>

            <p>{shortDesc}</p>

            <button className="addToCartBtn" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    </section>
    <section>
        <div className="reviewSection">
        <h3 className={`${tab === 'desc' ? "activeTab" : ""}`} onClick={()=>setTab('desc')}>Description</h3>
        <h3 className={`${tab === 'rev' ? "activeTab" : ""}`} onClick={()=>setTab('rev')}>Reviews({reviews.length})</h3>
        </div>
        {
            tab==="desc"?
            <div className="tabContent">
                <p>{description}</p>
            </div> :
            <div className="reviewContent">
                <ul>
                    {
                        reviews.map((item,index) =>(
                            <li><span>{item.rating}</span>
                            <p>{item.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        }
    </section>
    </>
    
  )
}

export default ProductDetails;
