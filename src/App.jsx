import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Properties from './pages/properties/Properties';
import Property from './pages/property/Property';
import AuthContext from './contexts/AuthProvider';
import Main from './shared/Main/Main';
import AdminLogin from './pages/adminLogin/AdminLogin';
import Saved from './pages/saved/Saved';
import Booking from './pages/booking/Booking';
import Admin from './shared/Admin/Admin';
import Users from './pages/adminPanel/Users';
import PrivateOutlet from './shared/PrivateOutlet/PrivateOutlet';
import Posts from './pages/adminPanel/Posts';
import AddPost from './shared/AddPost/AddPost';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'properties',
          element: <Properties />,
        },
        {
          path: 'properties/:id',
          element: <Property />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          element: <PrivateOutlet />,
          children: [
            {
              path: '/bookings',
              element: <Booking />
            },
            {
              path: '/posts',
              element: <Posts />
            },
            {
              path: '/add-posts',
              element: <AddPost />
            },
            {
              path: '/saved',
              element: <Saved />
            },
          ],
        },
        {
          path: 'login',
          element: <Login />
        },
      ]
    },
    {
      path: '/admin-login',
      element: <AdminLogin />
    },
    {
      path: 'admin',
      element: <Admin />,
      children: [
        {
          element: <PrivateOutlet type='admin' />,
          children: [
            {
              path: '/admin/users',
              element: <Users />
            },
            {
              path: 'admin/posts',
              element: <Posts />
            },
            {
              path: 'admin/bookings',
              element: <Posts />
            },
          ],
        },
      ]
    },
    { path: '*', element: <NotFound /> }
  ])
  return (
    <div>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </div>
  );
}

export default App;
