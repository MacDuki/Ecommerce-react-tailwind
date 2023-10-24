import React from "react";
import { shopContext } from "../../Context/Index";
import { MinimizedProductBag } from "../../MinimizedProductBag";
import "./ItemBag.css";

function ItemBag() {
	const { cartProducts } = React.useContext(shopContext);

	let realCartProducts;
	if (cartProducts.length > 0) {
		realCartProducts = cartProducts.slice();
		realCartProducts.shift();
	}

	return (
		<>
			<section className='ItemBag-section pt-10 w-screen flex flex-col fixed right-0 border items-center border-black rounded-lg bg-white overflow-y-scroll sm:w-1/3'>
				{realCartProducts.map((product) => (
					<MinimizedProductBag key={product.id} product={product} />
				))}
			</section>
		</>
	);
}

export { ItemBag };
