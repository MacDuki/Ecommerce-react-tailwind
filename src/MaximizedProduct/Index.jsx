import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { shopContext } from "../Context/Index";
import "./MaximizedProduct.css";

function MaximizedProduct() {
	const { showMaximized, showMaximizedProduct } = React.useContext(shopContext);
	return showMaximized ? (
		<>
			<aside className='maximized-product absolte w-screen flex flex-col fixed right-0 border border-black rounded-lg bg-white sm:w-1/3'>
				<AiOutlineClose
					onClick={showMaximizedProduct}
					className=' absolute right-2 top-2 cursor-pointer'
				/>
				<div>
					<img></img>
				</div>
				<div>
					<h2 className='font-medium '>detail</h2>
					<p>Precio</p>
				</div>
			</aside>
		</>
	) : null;
}

export { MaximizedProduct };
