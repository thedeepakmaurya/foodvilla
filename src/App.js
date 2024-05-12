import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';


const Instamart = lazy(() => import('./components/Instamart'));


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
            },
            {
                path: '/instamart',
                element: <Suspense><Instamart /></Suspense>,
            }
        ]
    }
]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);