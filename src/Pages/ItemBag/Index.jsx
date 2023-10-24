import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { shopContext } from "../../Context/Index";
import { MinimizedProduct } from "../../MinimizedProduct";
import "./ItemBag.css";

function ItemBag() {
	const { showMaximized, setShowMiximized, cartProducts, SetCartProducts } =
		React.useContext(shopContext);

	return !showMaximized ? (
		<>
			<section className='ItemBag-section w-screen flex flex-col fixed right-0 border items-center border-black rounded-lg bg-white sm:w-1/3'>
				{cartProducts?.map((product) => (
					<MinimizedProduct key={product.id} product={product} />
				))}
				<AiOutlineClose />
			</section>
		</>
	) : (
		setShowMiximized(!showMaximized)
	);
}

export { ItemBag };
