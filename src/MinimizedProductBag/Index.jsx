import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { shopContext } from "../Context/Index";

function MinimizedProductBag(product, key) {
	const { cartProducts, setCartProducts } = React.useContext(shopContext);

	function removeCartOne(productData) {
		const updateProducts = [...cartProducts];

		const updatedProducts = updateProducts.filter(
			(product) => key !== productData.id
		);
		setCartProducts(updatedProducts);
	}

	return (
		<div className=' relative flex justify-center items-center h-auto px-1 '>
			<div className='flex-col align-center justify-center bg-white w-64 h-64 rounded-lg'>
				<figure className='mb-1 flex align-center justify-center h-54 w-54 '>
					<AiOutlineClose
						onClick={() => {
							removeCartOne(product?.product);
						}}
						className='absolute top-3 right-3 w-6 h-6 bg-white rounded-full cursor-pointer'
					/>
					<h4 className='px-1 absolute top-3 left-3 w-auto h-auto rounded-lg bg-stone-200 text-center'>
						{product?.product.category}
					</h4>
					<img
						className='Product-img pt-10 h-52 max-w-52 cursor-pointer'
						src={product?.product.image}></img>
				</figure>
				<div className='flex gap-12 mr-1 ml-1 pr-4 mt-3 rounded-lg bg-stone-200 '>
					<h2 className='name truncate'> {product?.product.title}</h2>
					<h3 className='price'> {product?.product.price}$</h3>
				</div>
			</div>
		</div>
	);
}

export { MinimizedProductBag };
