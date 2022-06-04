import React from "react";
import "./Products.css";

export const Products = ({ product }) => {
	return (
		<div className="products-container" key={product.id}>
			<img src={product.img} alt={product.productTitle} />
			<h2>{product.productTitle}</h2>
			<div className="flex-2">
				<h5>{product.price}</h5>
				<h5>{product.brand}</h5>
				<h5>{product.size}</h5>
			</div>
		</div>
	);
};
