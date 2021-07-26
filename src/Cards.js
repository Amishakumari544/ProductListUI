import React from "react";

const Cards = (product, index) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow border-info border p-2" key={index}>
            <img src={product.image} alt="product-image" />
            <div className="card-body">
              <strong>{product.productName}</strong>
              <p className="h4 me-auto">{product.price}</p>
              <p>{product.discountPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
