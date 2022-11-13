import Admin from '../pages/admin';
import CartPage from '../pages/cart';
import DetailProduct from '../pages/detail-product/';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import SalesReportPage from '../pages/sales-report';

const routes = [
    {
        path: '/',
        element: <HomePage />,
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