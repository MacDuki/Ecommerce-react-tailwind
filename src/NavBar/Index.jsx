import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function NavBar() {
	const activeStyle = "underline";

	return (
		<nav className='bg-neutral-400 sticky flex flex-row justify-between items-center h-11	'>
			<ul className='flex flex-row space-x-4 ml-5 items-center     	'>
				<li>
					<NavLink to='/'>{BsShop}</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/'>Category 1</NavLink>
				</li>
				<li>
					<NavLink to='/'>Category 2</NavLink>
				</li>
				<li>
					<NavLink to='/'>Category 3</NavLink>
				</li>
				<li>
					<NavLink to='/'>Category 4</NavLink>
				</li>
			</ul>
			<ul className='flex justify-around space-x-4 mr-5 items-center	'>
				<li>
					<NavLink to='/MyAccount'>{VscAccount}</NavLink>
				</li>
				<li>
					<NavLink to='/MyOrders'>{BsListCheck}</NavLink>
				</li>
				<li>
					<NavLink to='/ItemBag'>{BsBag}</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export { NavBar };
