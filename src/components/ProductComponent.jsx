import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProductComponent.scss';
  

const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products && products.map((item) => {
    // const {id, title, image, category, price} = item;
    const img = item.images;
    const category = item.category;
    return (
      <div className="four-colomn" key={item.id} >
        <Link to={`/item/$id`}>
          <div className="ui-link-cards">
            <div className="card">
              <div className="image" >
                <img src= { img } alt = { item.title} />
              </div>
              <div className="content">
                <div className="header"> {item.title} </div>
                <div className="meta price"> <b> $ {item.price} </b> </div>
                {/* <div className="meta" > { item.category } </div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );

  })
  return (
    <>
      {renderList}
    </>
  )
}

export default ProductComponent;