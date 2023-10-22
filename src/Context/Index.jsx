import { createContext, useState } from "react";

const shopContext = createContext();

function ShopContextProvider({ children }) {
	const [cartNumber, setCartNumber] = useState(0);

	function plusCartOne() {
		let newCartNumber = cartNumber + 1;
		setCartNumber(newCartNumber);
	}

	return (
		<shopContext.Provider value={{ plusCartOne, cartNumber }}>
			{children}
		</shopContext.Provider>
	);
}

export { ShopContextProvider, shopContext };
