import {createBrowserRouter, Navigate} from 'react-router-dom';
import AdminLayout from './components/layouts/admin/AdminLayout';
import GuesLayout from './components/layouts/admin/GuesLayout';
import NotFound from './views/404';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Users from './views/user/Users';
import Dashboard from './views/Dashboard';
import UserForm from './views/user/UserForm';
import Orders from './views/order/Orders';
import Categories from './views/product/category/Categories';
import CategoryForm from './views/product/category/CategoryForm';
import Attributes from './views/product/attribute/Attributes';
import AttributeDetail from './views/product/attribute/AttributeDetail';

const router =createBrowserRouter([
    {
        path:'/',
        element:<AdminLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key='userCreate'/>
            },
            {
                path: '/users/:id',
                element: <UserForm key='userUpdate'/>
            },
            {
                path: '/categories',
                element: <Categories key='mainCategories' />
            },
            {
                path: '/categories/:id',
                element: <Categories key='subCategories' />
            },
            {
                path: '/categories/new',
                element: <CategoryForm key='categoryCreate'/>
            },
            {
                path: '/categories/:id/edit',
                element: <CategoryForm key='categoryUpdate'/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
            {
                path: '/attributes',
                element: <Attributes/>
            },
            {
                path: '/attributes/:id',
                element: <AttributeDetail/>
            },
        ]
    },
    {
        path:'/',
        element:<GuesLayout/>,
        children:[
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
