import { BrowserRouter, useRoutes } from "react-router-dom";
import { NavBar } from "./NavBar/Index";
import { Home } from "./Pages/Home/Index";
import { ItemBag } from "./Pages/ItemBag/Index";
import { MyAccount } from "./Pages/MyAccount/Index";
import { MyOrders } from "./Pages/MyOrders/Index";
import { NotFound } from "./Pages/NotFound/NotFound";

import "./RenderApp.css";

function RenderApp() {
	const RoutesFunction = () => {
		const routes = useRoutes([
			{ path: "/", element: <Home /> },
			{ path: "/MyAccount", element: <MyAccount /> },
			{ path: "/MyOrders", element: <MyOrders /> },
			{ path: "/*", element: <NotFound /> },
			{ path: "/ItemBag", element: <ItemBag /> },
		]);
		return routes;
	};
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<RoutesFunction />
			</BrowserRouter>
		</>
	);
}

export default RenderApp;
