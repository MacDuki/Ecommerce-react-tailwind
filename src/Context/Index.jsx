import { createContext, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	const [cartNumber, setCartNumber] = useState(0);

	function plusCartOne() {
		let newCartNumber = cartNumber + 1;
		setCartNumber(newCartNumber);
	}

	const [showMaximized, setShowMaximized] = useState(false);
	function showMaximizedProduct() {
		setShowMaximized(!showMaximized);
	}

	return (
		<shopContext.Provider
			value={{
				plusCartOne,
				cartNumber,
				showMaximizedProduct,
				showMaximized,
			}}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
