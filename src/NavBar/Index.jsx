import React, { useState } from "react";
import { BsBag, BsListCheck, BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { shopContext } from "../Context/Index";

function NavBar() {
	const activeStyle = "underline";
	const [width, setWidth] = useState(window.innerWidth);
	const showToggleNav = width <= 768;
	const { cartNumber } = React.useContext(shopContext);

	return (
		<nav className='bg-neutral-400 top-0 z-10 fixed flex flex-row justify-between items-center h-11 w-full'>
			<ul className='flex flex-row items-center  md:  space-x-4 ml-5'>
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
				{showToggleNav ? null : (
					<>
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
					</>
				)}
			</ul>
			<ul className='flex justify-around  items-center 	md: space-x-4 mr-5'>
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
			<div className='absolute top-1 right-2 bg-neutral-200 rounded-full h-4 w-4 flex justify-center items-center font-light'>
				{cartNumber}
			</div>
		</nav>
	);
}

export { NavBar };
