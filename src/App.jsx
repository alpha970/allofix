
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ResetPass from './pages/resetpassword/ResetPass';
import Dashboard from './pages/dashboad/dashboad';
import DGig from './pages/dashboad/gig/Gig';
import Gig from './pages/gig/Gig';
import Add from './pages/add/Add';
import Message from './pages/message/Message';
import Profile from './pages/profile/Profile';
import Messages from './pages/messages/Messages';
import Services from './pages/services/Services';
import Orders from './pages/orders/Orders';
import Gigs from './pages/gigs/Gigs';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {



  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  };



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/dashboard/gig/:id",
          element: <DGig />,
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/resetpassword",
      element: <ResetPass />,
    },
  ])
  return <RouterProvider router={router} />;

}

export default App
