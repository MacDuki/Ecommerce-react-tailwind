import { createContext, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	// Cart number logic
	const [cartNumber, setCartNumber] = useState(0);
	function plusCartOne() {
		let newCartNumber = cartNumber + 1;
		setCartNumber(newCartNumber);
	}

	// show maximized detail logic
	const [showMaximized, setShowMaximized] = useState(false);
	function showMaximizedProduct() {
		setShowMaximized(!showMaximized);
	}

	/// detail product info logic
	const [productInfo, setProductInfo] = useState({});

	return (
		<shopContext.Provider
			value={{
				plusCartOne,
				cartNumber,
				showMaximizedProduct,
				showMaximized,
				productInfo,
				setProductInfo,
			}}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
