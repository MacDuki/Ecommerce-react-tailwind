import { useEffect, useState } from "react";
import { Layout } from "../../Layout/Index";
import { MinimizedProduct } from "../../MinimizedProduct";
function Home() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products").then((response) =>
			response.json().then((data) => setProducts(data))
		);
	}, []);

	return (
		<Layout>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center md:grid-cols-3 gap-10'>
				{products?.map((product) => (
					<MinimizedProduct key={product.id} product={product} />
				))}
			</div>
		</Layout>
	);
}

export { Home };
