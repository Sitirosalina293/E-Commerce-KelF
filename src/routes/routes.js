import Admin from '../pages/admin';
import CartPage from '../pages/cart';
import DetailProduct from '../pages/detail-product/';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import SalesReportPage from '../pages/sales-report';
import JeweleryPage from '../pages/jewelery';
import ManPage from '../pages/menClothes';
import WomenPage from '../pages/womenClothes';
import ElectronicsPage from '../pages/electronics';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/jewelery',
        element: <JeweleryPage />,
    },
    {
        path: '/manclothes',
        element: <ManPage />,
    },
    {
        path: '/womenclothes',
        element: <WomenPage />,
    },
    {
        path: '/electronics',
        element: <ElectronicsPage />,
    },
    {
        path: '/admin',
        element: <Admin />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/detail-item',
        element: <DetailProduct/>,
    },
    {
        path: '/sales-report',
        element: <SalesReportPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
]

export default routes;