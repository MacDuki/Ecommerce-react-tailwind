import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from './Pages/Home/Index';
import { MyAccount } from './Pages/MyAccount/Index';
import { MyOrders } from './Pages/MyOrders/Index';
import { NotFound } from './Pages/NotFound/NotFound';
import './RenderApp.css';

const RoutesFunction = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/MyAccount', element: <MyAccount/>},
    {path: '/MyOrders', element: <MyOrders/>},
    {path: '/*', element: < NotFound/>},
  ])
  return routes;
}

function RenderApp() {
  return (
    <>
    <nav className='bg-neutral-400'>
      <ul >
        <li>Home</li>
        <li>Categorie 1</li>
        <li>Categorie 2</li>
        <li>Categorie 3</li>
        <li>Categorie 4</li>
      </ul>
      <ul>
        <li>My orders</li>
        <li>My account</li>
        <li>ITEM-BAG</li>
      </ul>
    </nav>
    <BrowserRouter>
    <RoutesFunction/>
    </BrowserRouter>
    </>
  )
}

export default RenderApp;
