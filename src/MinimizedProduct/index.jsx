import { AiOutlinePlus } from "react-icons/ai";
function MinimizedProduct() {
	return (
		<div className='w-40'>
			<figure className='relative mb-2 w-full h-4/5'>
				<AiOutlinePlus className='absolute top-0 right-0 flex item-center w-6 h-6 bg-white rounded-full justify-center' />
				<img
					className='Product-img'
					src='https://f.fcdn.app/imgs/db8b34/artcomputer.com.uy/artcuy/fd89/original/catalogo/194253324034_194253324034_1/2000-2000/auriculares-inalambrico-airpods-gen-3-lightning-auriculares-inalambrico-airpods-gen-3-lightning.jpg'></img>
			</figure>
			<div>
				<h2 className=' name'> Nombre del producto</h2>
				<h3 className='price'> Precio del producto</h3>
			</div>
		</div>
	);
}

export { MinimizedProduct };
